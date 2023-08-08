import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../common/PageLayout';
import SEO from '../common/SEO';

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/' && pathname !== '/Home') {
    return null;
  }
  return (
    <PageLayout title="Home">
      <>
        <SEO
          title="Awesome website!"
          description="SEO tags with React Helmet."
          name="Awesome Company name."
          type="article"
        />
        <main>
          <section className="medium-container">home-page content</section>
        </main>
      </>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
