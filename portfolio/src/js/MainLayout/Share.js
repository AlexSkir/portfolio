import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
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
import CopyBtn from '../common/CopyBtn';

export default function Share(props) {
  const { t } = useTranslation();
  const { url } = props;
  return (
    <>
      <Typography variant="h6" align="right">
        {t('footer.shareTitle')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', button: { width: 'fit-content' } }}>
        <CopyBtn
          contactName={t('footer.copyLink')}
          copyText={url}
          icon={<ContentCopyRoundedIcon />}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          flexWrap: 'wrap',
          button: {
            width: { xs: '40px', sm: '50px' },
            height: { xs: '40px', sm: '50px' },
            margin: '10px',
            borderRadius: '8px',
            overflow: 'hidden',
          },
          svg: { width: '100%', height: '100%' },
        }}
      >
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon />
        </TelegramShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>
        <VKShareButton url={url}>
          <VKIcon />
        </VKShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </Box>
    </>
  );
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
};
