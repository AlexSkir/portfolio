import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import LoadingBlock from '../../common/LoadingBlock';

const ContactItemCopieble = lazy(() => import('../../common/ContactItemCopieble'));
const ResumeDownload = lazy(() => import('../../common/ResumeDownload'));
const PhoneIcon = lazy(() => import('../../common/iconsJs/PhoneIconGradient'));
const Location = lazy(() => import('../../../assets/svg/Location.svg'));
const Email = lazy(() => import('../../../assets/svg/Email.svg'));

export default function ContactBlock(props) {
  const { open, phone, address, location } = props;

  return (
    <div className="side-block__contact-card" style={{ display: open ? 'flex' : 'none' }}>
      <div className="side-block__contact-item">
        <Suspense fallback={<LoadingBlock width="100%" height="44px" margin="20px 0" />}>
          <ContactItemCopieble
            link="tel:+79938996716"
            copyText="+79938996716"
            icon={<PhoneIcon main="var(--secondary-main)" dark="var(--secondary-dark)" />}
            contactName={phone}
          />
        </Suspense>
      </div>

      <hr className="MyDivider" />

      <div className="side-block__contact-item">
        <Suspense fallback={<LoadingBlock width="100%" height="44px" margin="20px 0" />}>
          <ContactItemCopieble
            link="mailto:a.skirnevskaia@gmail.com"
            copyText="a.skirnevskaia@gmail.com"
            icon={<Email className="secondary_main MySvg-icon" />}
            contactName="Email"
          />
        </Suspense>
      </div>

      <hr className="MyDivider" />

      <div className="side-block__contact-item">
        <Suspense fallback={<LoadingBlock width="100%" height="44px" margin="20px 0" />}>
          <ContactItemCopieble
            link="https://www.google.com/maps/search/?api=1&query=55.840399,37.490859"
            copyText={address}
            icon={<Location className="secondary_dark MySvg-icon" />}
            contactName={location}
          />
        </Suspense>
      </div>

      <hr className="MyDivider" />

      <div className="contact-item__resume">
        <Suspense
          fallback={
            <LoadingBlock width="185px" height="44px" margin="20px 0" borderRadius="20px" />
          }
        >
          <ResumeDownload />
        </Suspense>
      </div>
    </div>
  );
}

ContactBlock.propTypes = {
  open: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
