import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";

 
 

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
 

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
