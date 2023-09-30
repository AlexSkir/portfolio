'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

import ContactItemCopieble from '../common/ContactItemCopieble';
import ResumeDownload from '../common/ResumeDownload';
import PhoneIcon from '../common/iconsJs/PhoneIconGradient';
import Location from '../../assets/svg/Location.svg';
import Email from '../../assets/svg/Email.svg';
import { useTranslation } from '../../../i18n/client';

export default function ContactBlock(props) {
  const { open } = props;
  const { lng } = useParams();
  const { t } = useTranslation(lng, 'contact');
  const theme = useTheme();

  return (
    <div className="side-block__contact-card" style={{ display: open ? 'flex' : 'none' }}>
      <div className="side-block__contact-item">
        <ContactItemCopieble
          link="tel:+79938996716"
          copyText="+79938996716"
          tooltip={t('items.call')}
          icon={<PhoneIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />}
          contactName={t('items.phone')}
        />
      </div>

      <hr className="MyDivider" />

      <div className="side-block__contact-item">
        <ContactItemCopieble
          link="mailto:a.skirnevskaia@gmail.com"
          copyText="a.skirnevskaia@gmail.com"
          tooltip={t('items.message')}
          icon={<Email className="secondary_main MySvg-icon" />}
          contactName="Email"
        />
      </div>

      <hr className="MyDivider" />

      <div className="side-block__contact-item">
        <ContactItemCopieble
          link="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
          copyText={t('items.address')}
          tooltip={t('items.map')}
          icon={<Location className="secondary_dark MySvg-icon" />}
          contactName={t('items.location')}
        />
      </div>

      <hr className="MyDivider" />

      <div className="contact-item__resume">
        <ResumeDownload />
      </div>
    </div>
  );
}

ContactBlock.propTypes = {
  open: PropTypes.bool.isRequired,
};
