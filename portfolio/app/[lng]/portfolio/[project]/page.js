import Link from 'next/link';
// import { useTranslation } from '../i18n';

export default async function Page({ params: { project, lng } }) {
  // const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{project}</h1>
      <Link href={`/${lng}/portfolio`}>back</Link>
      <br />
      <Link href={`/${lng}`}>home</Link>
    </>
  );
}
