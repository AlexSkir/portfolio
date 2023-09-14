import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import poster from '../../assets/images/portfolio.png';

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
      <meta property="og:image" itemProp="image" content={poster} />
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
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/94952225"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      </noscript>
      {/* <!-- /Yandex.Metrika counter --> */}
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
