import React, { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../Layout/PageWrapper';
import LoadingBlock from '../common/LoadingBlock';

const Typography = lazy(() => import('../common/Typography'));
const ContactItems = lazy(() => import('./ContactItems'));
const Form = lazy(() => import('./Form'));

export default function Page() {
  const { t } = useTranslation();

  return (
    <>
      <PageWrapper title={t('contact.title')}>
        <div className="contact-page__section">
          <div className="contact-page__name-wrapper">
            <Suspense fallback={<LoadingBlock width="100%" height="35px" />}>
              <Typography variant="h4" align="left" component="h3">
                {t('contact.name')}
              </Typography>
            </Suspense>
          </div>

          <div className="contact-page__name-wrapper">
            <Suspense fallback={<LoadingBlock width="100%" height="35px" />}>
              <Typography variant="h6" classes="contact-page__position" component="h4">
                {t('contact.position')}
              </Typography>
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<LoadingBlock width="100%" height="300px" />}>
          <ContactItems />
        </Suspense>
        <Suspense fallback={<LoadingBlock width="100%" height="300px" />}>
          <Form />
        </Suspense>
      </PageWrapper>
    </>
  );
}
