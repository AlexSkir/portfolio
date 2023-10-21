/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
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
import Typography, { roboto } from '../Typography';
import ShareIcon from '../../assets/svg/Share.svg';

const dialogBlock = {
  ' .MuiDialog-paper': {
    p: '16px',
    m: '16px',
    width: 'calc(100% - 32px)',
    borderRadius: '20px',
    backgroundColor: 'var(--navbar-active-bg)',
    color: 'var(--contrastText)',
  },
};

const shareIcons = (url, ...args) => {
  const socialButtons = [
    {
      item: (
        <LinkedinShareButton url={url}>
          <LinkedinIcon />
          LinkedIn
        </LinkedinShareButton>
      ),
    },
    {
      item: (
        <TelegramShareButton url={url}>
          <TelegramIcon />
          Telegram
        </TelegramShareButton>
      ),
    },
    {
      item: (
        <WhatsappShareButton url={url}>
          <WhatsappIcon />
          WhatsApp
        </WhatsappShareButton>
      ),
    },
    {
      item: (
        <FacebookShareButton url={url}>
          <FacebookIcon />
          Facebook
        </FacebookShareButton>
      ),
    },
    {
      item: (
        <TwitterShareButton url={url}>
          <TwitterIcon />
          Twitter
        </TwitterShareButton>
      ),
    },
    {
      item: (
        <VKShareButton url={url}>
          <VKIcon />
          VKontakte
        </VKShareButton>
      ),
    },
  ];
  return socialButtons.slice(...args);
};

export default function ShareBar(props) {
  const { url, len, t } = props;
  const [open, setOpen] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);
  const [shareUrl, setShareUrl] = React.useState('');

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

  React.useEffect(() => {
    setShareUrl(window.location[url]);
  });

  return (
    <>
      <div className="share-container">
        {shareIcons(shareUrl, 0, len).map((item, i) => (
          <div key={i}>{item.item}</div>
        ))}

        <button onClick={handleClickOpen} type="button" aria-label={t.common.dialogShare}>
          <ShareIcon className="MySvg-icon share-btn__icon" />
        </button>
      </div>

      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="xs"
        sx={dialogBlock}
        className={roboto.variable}
      >
        <Typography variant="h6">{t.common.dialogShare}</Typography>
        <ul className="share__list">
          {shareIcons(shareUrl).map((item, i) => (
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
            {shareUrl}
          </Typography>

          <button
            type="button"
            className="copy_btn button_isActive_true"
            onClick={() => handleCopy(shareUrl)}
          >
            <Typography variant="body3">{t.common.copyLink}</Typography>
          </button>
        </div>
      </Dialog>
    </>
  );
}

ShareBar.propTypes = {
  url: PropTypes.string.isRequired,
  len: PropTypes.number.isRequired,
  t: PropTypes.object.isRequired,
};
