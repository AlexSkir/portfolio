import React, { Suspense, lazy } from 'react';
import PageLayout from '../../components/PageLayout';
import Project from './Project';
import getDictionary from '../../../i18n/dictionaries';
import projectArr from '../projectsArray';

export default async function Page({ params }) {
  const { lng, project } = params;
  const t = await getDictionary(lng, 'projects');
  const allData = projectArr(t);
  const projectData = allData[project];

  return (
    <PageLayout title={t.title} avatar="ok" lng={lng}>
      <Project data={projectData} />
    </PageLayout>
  );
}
