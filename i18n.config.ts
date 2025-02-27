import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./middleware";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (
      await import(`./messages/${locale}/index.json`)
    ).default,
  };
});
