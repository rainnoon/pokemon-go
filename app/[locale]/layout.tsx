import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";

// 获取支持的语言列表
const locales = ["en", "zh"];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 验证语言是否受支持
  if (!locales.includes(locale)) notFound();

  console.log(locale, "ggg");
  // 加载消息
  let messages;
  try {
    messages = (
      await import(`../../messages/${locale}/index.json`)
    ).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}
