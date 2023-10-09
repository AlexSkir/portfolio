import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import PageLayout from '../../components/PageLayout';
import Project from './Project';
import getDictionary from '../../../i18n/dictionaries';
import projectArr from '../projectsArray';
// import { useTranslation } from '../i18n';

export default async function Page({ params }) {
  const { lng, project } = params;
  const t = await getDictionary(lng, 'projects');
  const allData = projectArr(t);
  const projectData = allData[project];

  return (
    <PageLayout title={projectData.name} avatar="ok" lng={lng}>
      <Project data={projectData} />
    </PageLayout>
  );
}
