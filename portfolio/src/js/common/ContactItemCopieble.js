import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Typography from './Typography';

export default function ContactItemCopieble(props) {
  const { link, copyText, icon, contactName } = props;
  const [copySuccess, setCopySuccess] = React.useState(false);
  const { t } = useTranslation();

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <button
      type="button"
      className="copieble-btn__container"
      onMouseUp={() => handleCopy(copyText)}
    >
      <div className="copieble-btn__icon">{icon}</div>
      <div className="copieble-btn__body">
        <Typography variant="body3" classes="copieble-btn__name" align="left">
          {contactName}
          <Typography variant="body1" component="span" classes="copieble-btn__status">
            {copySuccess ? t('common.copieble.copied') : ''}
          </Typography>
        </Typography>

        <a className="copieble-btn__link" href={link} target="_blank" rel="noreferrer">
          <Typography classes="copieble-btn__link-text" variant="body3">
            {copyText}
          </Typography>
        </a>
      </div>
    </button>
  );
}

ContactItemCopieble.propTypes = {
  link: PropTypes.string.isRequired,
  copyText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  contactName: PropTypes.string.isRequired,
};
