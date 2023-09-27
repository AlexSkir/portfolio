import enSeo from '../../i18n/locales/en/seo.json';
import ruSeo from '../../i18n/locales/ru/seo.json';

export async function generateMetadata({ params }) {
  // read route params
  const { lng } = params;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  const seo = lng === 'en' ? enSeo.contact : ruSeo.contact;

  return {
    title: seo.title,
    description: seo.description.join(' '),
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}

export default async function ContactLayout({ children, params }) {
  return <section>{children}</section>;
}
