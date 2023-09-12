import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import poster from '../../assets/images/portfolio.png';
import poster2 from '../../assets/images/portfolio2.png';

export default function SEO(props) {
  const { title, description, name, keywords, url, image } = props;
  const imageLink = window.location.origin + image;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      {/* <meta property="og:site_name" content="Aleksandra Skirnevskaia - Frontend Developer" />
      <meta property="og:updated_time" content="1440432930" /> */}
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageLink} />
      <meta property="og:image" itemProp="image" content={poster2} />
      <meta property="og:image:alt" content={title} />
      {/* <link property="image" href={imageLink} />
      <link rel="image_src" href={imageLink} /> */}
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:site" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageLink} />
      <meta name="twitter:image:alt" content={title} />
      {/* End Twitter tags */}
      <meta name="keywords" content={keywords} />

      <meta property="vk:image" content={imageLink} />

      {/*  <!-- Google tag (gtag.js) -->  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CY08ZZSTVE" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('G-CY08ZZSTVE', 'your_id');`}
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  name: '@AlexSkir',
  keywords: 'Frontend, React, JS, Javascript, design, App, Web development, AlexSkir, Skirnevskaia',
  url: window.location.href,
  image: poster,
};
