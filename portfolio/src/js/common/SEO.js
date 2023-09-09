import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Avatar from '../../assets/images/avatar/avatar-thumb-up.png';

const descr = `Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and 
versatile Front-end developer with a keen interest in creating the user friendly apps and websites. 
I enjoy applying both new technologies and learning about the Best Practice solid solutions. 
I constantly strive to enhance my skills and embrace emerging trends in the industry.`;

export default function SEO(props) {
  const { t } = useTranslation();
  const { title, description, name, keywords, url, image } = props;
  const imageLink = window.location.origin + image;
  const defDescr = description || t('common.seo.description', { joinArrays: ' ' });
  const defTitle = title || t('common.seo.title');
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={defDescr} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defTitle} />
      <meta property="og:site_name" content="Aleksandra Skirnevskaia - Frontend Developer" />
      <meta property="og:updated_time" content="1440432930" />
      <meta property="og:description" content={defDescr} />
      <meta property="og:url" content={url} />
      <meta property="og:image" itemProp="image" content={imageLink} />
      <meta property="og:image" content={imageLink} />
      <meta property="og:image:alt" content={defTitle} />
      <link rel="image_src" href={imageLink} />
      {/* <link property="image" href={imageLink} />
      <link rel="image_src" href={imageLink} /> */}
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:site" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defTitle} />
      <meta name="twitter:description" content={defDescr} />
      <meta name="twitter:image" content={imageLink} />
      <meta name="twitter:image:alt" content={defTitle} />
      {/* End Twitter tags */}
      <meta name="keywords" content={keywords} />

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
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  name: '@AlexSkir',
  keywords: 'Frontend, React, JS, Javascript, design, App, Web development, AlexSkir, Skirnevskaia',
  url: window.location.href,
  image: Avatar,
};
