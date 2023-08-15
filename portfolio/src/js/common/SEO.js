import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import Avatar from '../../assets/images/avatar-thumb-up.png';

const descr = `Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and 
versatile Front-end developer with a keen interest in creating the user friendly apps and websites. 
I enjoy applying both new technologies and learning about the Best Practice solid solutions. 
I constantly strive to enhance my skills and embrace emerging trends in the industry.`;

export default function SEO(props) {
  const { title, description, name, twType, fbType, keywords, url, image } = props;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={fbType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={twType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      <meta name="keywords" content={keywords} />

      {/*  <!-- Google tag (gtag.js) -->  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=your_id" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'your_id');`}
      </script>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  twType: PropTypes.string,
  fbType: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: 'Aleksandra Skirnevskaia',
  description: descr,
  name: '@AlexSkir',
  twType: 'summary',
  fbType: 'website',
  keywords: 'Frontend, React, JS, Javascript, design, App, Web development, AlexSkir, Skirnevskaia',
  url: 'http',
  image: Avatar,
};
