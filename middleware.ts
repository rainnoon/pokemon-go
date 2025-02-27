import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// 支持的语言列表
export const locales = ['en', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];

const handleI18nRouting = createIntlMiddleware({
  locales,
  defaultLocale: 'en',
});

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;
  const preferredLocale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  const LOCALES = locales;
  const hasLocale = LOCALES.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!hasLocale) {
    if (
      preferredLocale && 
      LOCALES.includes(preferredLocale as Locale) &&
      preferredLocale !== "en"
    ) {
      // 如果用户首选语言不是英语，重定向到对应语言路径
      const redirectUrl = new URL(request.url);
      redirectUrl.pathname = `/${preferredLocale}${pathname}`;
      return NextResponse.redirect(redirectUrl);
    } else {
      // 如果是英语或无法确定语言，为next-intl添加默认的'en'
      const newUrl = new URL(request.url);
      newUrl.pathname = `/en${pathname}`;
      request = new NextRequest(newUrl, request);
    }
  }

  const response = handleI18nRouting(request);
  response.headers.set("x-path", pathname);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|pet|.*\\.[^/]+$).*)'
  ]
};
