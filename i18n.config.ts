import { getRequestConfig } from 'next-intl/server';
import { requestLocale } from './middleware';

export default getRequestConfig(async () => {
  const locale = await requestLocale();
  return {
    locale,
    messages: (await import(`./messages/${locale}/index.json`)).default,
    timeZone: 'Asia/Shanghai'
  };
});
