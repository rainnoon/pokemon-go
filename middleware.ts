import createMiddleware from 'next-intl/middleware';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// 支持的语言列表
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

// 创建导航工具
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

// 创建中间件
export default createMiddleware({
  defaultLocale: 'zh',
  locales,
  localePrefix: 'as-needed'
});

// 导出 requestLocale 函数
export async function requestLocale() {
  // 这里可以根据需要添加自定义逻辑来确定语言
  // 例如：从 cookie、用户设置或浏览器首选项中获取
  return 'zh';
}

export const config = {
  // 匹配所有路径，除了以下路径：
  // - API 路由
  // - 以 "_next" 开头的路径（Next.js 内部路径）
  // - 以 "." 开头的路径（例如图片）
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
