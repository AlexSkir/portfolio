'use client';

import React, { Suspense, lazy } from 'react';
import { useParams } from 'next/navigation';
import PropTypes from 'prop-types';
import LoadingBlock from '../components/common/LoadingBlock';
import HeadHunter from '../assets/icons/hh.png';

const ContactItemCopieble = lazy(() => import('../components/common/ContactItemCopieble'));
const CallIcon = lazy(() => import('../components/common/iconsJs/CallIconGradient'));
const EmailIcon = lazy(() => import('../components/common/iconsJs/EmailIconGradient'));
const WhatsApp = lazy(() => import('../assets/svg/Whatsapp.svg'));
const Telegram = lazy(() => import('../assets/svg/Telegram.svg'));
const GitHub = lazy(() => import('../assets/svg/gh-pages.svg'));

export default function ContactItems(props) {
  const { t } = props;
  const { lng } = useParams();

  return (
    <div className="contact-page__contact-items">
      <div className="contact-page__contacts-wrapper contacts_odd">
        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link="tel:+79938996716"
              copyText="+79938996716"
              icon={<CallIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />}
              contactName={t.items.phone}
            />
          </Suspense>
        </div>

        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link="https://wa.me/+79938996716"
              copyText="+79938996716"
              icon={<WhatsApp className="MySvg-icon" style={{ fill: '#25D366' }} />}
              contactName="WhatsApp"
            />
          </Suspense>
        </div>

        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link="https://t.me/alexskir"
              copyText="alexskir"
              icon={<Telegram className="MySvg-icon" style={{ fill: '#229ED9' }} />}
              contactName="Telegram"
            />
          </Suspense>
        </div>
      </div>

      <div className="contact-page__contacts-wrapper contacts_even">
        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link="mailto:a.skirnevskaia@gmail.com"
              copyText="a.skirnevskaia@gmail.com"
              icon={<EmailIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />}
              contactName="Email"
            />
          </Suspense>
        </div>

        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link="https://github.com/AlexSkir"
              copyText="AlexSkir"
              icon={<GitHub className="MySvg-icon" sx={{ fill: '#000000' }} />}
              contactName="GitHub"
            />
          </Suspense>
        </div>

        <div className="contact-page__contact-item">
          <Suspense fallback={<LoadingBlock width="100%" height="100px" variant="rounded" />}>
            <ContactItemCopieble
              link={
                lng === 'en'
                  ? 'https://hh.ru/resume/1840c148ff0bdaee9f0039ed1f734b67763447'
                  : 'https://hh.ru/resume/62f371a2ff0810d5600039ed1f48674e706c43'
              }
              copyText="alexskir"
              icon={
                <div
                  className="contact-page__hh-icon"
                  style={{ backgroundImage: `url(${HeadHunter.src})` }}
                />
              }
              contactName={lng}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

ContactItems.propTypes = {
  t: PropTypes.object.isRequired,
};
