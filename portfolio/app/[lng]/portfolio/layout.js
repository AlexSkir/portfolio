import React from 'react';
import PropTypes from 'prop-types';
import getDictionary from '../../i18n/dictionaries';

export async function generateMetadata({ params }) {
  // read route params
  const { lng } = params;
  const seo = await getDictionary(lng, 'seo');

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousTitle = (await parent).openGraph?.images || []

  return {
    title: seo.portfolio.title,
    description: seo.portfolio.description,
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
