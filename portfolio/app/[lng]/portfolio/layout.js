export async function generateMetadata({ params }, parent) {
  // read route params
  const { lng } = params;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  const seo = lng === 'en' ? 'hi from portfolio' : 'привет!';

  return {
    title: seo,
    description: `${seo} descr`,
    /* openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    }, */
  };
}

export default async function Layout({ children, params: { lng } }) {
  return <>{children}</>;
}
