/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
  WhatsappIcon,
} from 'react-share';
import Typography from './Typography';
import ShareIcon from '../../assets/svg/Share.svg';

const dialogBlock = {
  ' .MuiDialog-paper': {
    p: '20px',
    borderRadius: '20px',
    backgroundColor: 'var(--primary-paper)',
    color: 'var(--contrastText)',
  },
};

const shareIcons = (url, ...args) => {
  const Url = typeof window !== 'undefined' ? window.location[url] : '';
  const socialButtons = [
    {
      item: (
        <LinkedinShareButton url={Url}>
          <LinkedinIcon />
          LinkedIn
        </LinkedinShareButton>
      ),
      tooltip: 'LinkedIn',
    },
    {
      item: (
        <TelegramShareButton url={Url}>
          <TelegramIcon />
          Telegram
        </TelegramShareButton>
      ),
      tooltip: 'Telegram',
    },
    {
      item: (
        <WhatsappShareButton url={Url}>
          <WhatsappIcon />
          WhatsApp
        </WhatsappShareButton>
      ),
      tooltip: 'Whatsapp',
    },
    {
      item: (
        <FacebookShareButton url={Url}>
          <FacebookIcon />
          Facebook
        </FacebookShareButton>
      ),
      tooltip: 'Facebook',
    },
    {
      item: (
        <TwitterShareButton url={Url}>
          <TwitterIcon />
          Twitter
        </TwitterShareButton>
      ),
      tooltip: 'Twitter',
    },
    {
      item: (
        <VKShareButton url={Url}>
          <VKIcon />
          VKontakte
        </VKShareButton>
      ),
      tooltip: 'VKontakte',
    },
  ];
  return socialButtons.slice(...args);
};

export default function ShareBar(props) {
  const { url, len } = props;
  const [open, setOpen] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => {
        handleClose();
      }, 500);
      setTimeout(() => {
        if (copySuccess) {
          setCopySuccess(false);
        }
      }, 1000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <>
      <div className="share-container">
        {shareIcons(url, 0, len).map((item) => (
          <Tooltip key={item.tooltip} title={item.tooltip}>
            {item.item}
          </Tooltip>
        ))}

        <button onClick={handleClickOpen} type="button" aria-label={t('common.dialogShare')}>
          <ShareIcon className="MySvg-icon share-btn__icon" />
        </button>
      </div>

      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm" sx={dialogBlock}>
        <Typography variant="h6">{t('common.dialogShare')}</Typography>
        <ul className="share__list">
          {shareIcons(url).map((item, i) => (
            <li
              className="MyTypography MyTypography-button"
              key={i}
              onClick={() => handleClose(item)}
            >
              {item.item}
            </li>
          ))}
        </ul>

        <div className="share__copy-block">
          <Typography variant="body3" classes="share__copy-url">
            {typeof window !== 'undefined' ? window.location[url] : ''}
          </Typography>

          <Tooltip title={copySuccess ? t('common.copieble.copied') : t('common.copieble.copy')}>
            <button
              type="button"
              className="copy_btn button_isActive_true"
              onClick={() => handleCopy(window.location[url])}
            >
              <Typography variant="body3">{t('common.copyLink')}</Typography>
            </button>
          </Tooltip>
        </div>
      </Dialog>
    </>
  );
}

ShareBar.propTypes = {
  url: PropTypes.string.isRequired,
  len: PropTypes.number.isRequired,
};
