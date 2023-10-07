import React from 'react';
import getDictionary from '../../i18n/dictionaries';

export async function generateMetadata({ params }) {
  const { lng } = params;
  const seo = await getDictionary(lng, 'seo');

  return {
    title: seo.contact.title,
    description: seo.contact.description.join(' '),
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}

export default async function ContactLayout({ children, params }) {
  return <>{children}</>;
}
