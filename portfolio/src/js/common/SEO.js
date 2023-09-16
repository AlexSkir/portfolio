/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import poster from '../../assets/images/portfolio.png';

const keywords = `Frontend, React, JS, Javascript, Web development, AlexSkir, create website, freelance,
Skirnevskaia, Aleksandra Skirnevskaia, разработка сайтов, фронтенд разработчик, веб разработка, фриланс,
Александра Скирневская, Скирневская`;

export default function SEO(props) {
  const { title, description, image } = props;
  const imageLink = window.location.origin + image;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="alexskir.ru" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={imageLink} />
      <meta property="og:image" itemProp="image" content={imageLink} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:site" content="alexskir.ru" />
      <meta name="twitter:creator" content="@alex_skir" />
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
      {/*  <!-- Google tag (gtag.js) -->  */}
      {/* <!-- Yandex.Metrika counter --> */}
      <script type="text/javascript">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(94952225, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });`}
      </script>
      {/* <!-- /Yandex.Metrika counter --> */}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

SEO.defaultProps = {
  image: poster,
};
