import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
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
import CopyBtn from '../common/CopyBtn';

const dialogBlock = {
  ' .MuiDialog-paper': {
    p: '20px',
    borderRadius: '20px',
  },
};

const dialogList = {
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100%',
  overflowX: 'auto',
  pt: 0,
  li: {
    mx: '10px',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  svg: {
    width: { xs: '40px', sm: '50px' },
    height: { xs: '40px', sm: '50px' },
    mb: '10px',
    borderRadius: '8px',
  },
};

const shareBox = {
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
};

const copyBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  border: '1px solid',
  borderColor: 'primary.light',
  borderRadius: '20px',
};

const linkBlock = {
  position: 'relative',
  pl: '8px',
  pr: '20px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

const shareIcons = (url, title, summary, image, len1, len2) => {
  const socialButtons = [
    {
      item: (
        <LinkedinShareButton url={url} title={title} summary={summary}>
          <LinkedinIcon />
          LinkedIn
        </LinkedinShareButton>
      ),
      tooltip: 'LinkedIn',
    },
    {
      item: (
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon />
          Telegram
        </TelegramShareButton>
      ),
      tooltip: 'Telegram',
    },
    {
      item: (
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon />
          WhatsApp
        </WhatsappShareButton>
      ),
      tooltip: 'Whatsapp',
    },
    {
      item: (
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon />
          Facebook
        </FacebookShareButton>
      ),
      tooltip: 'Facebook',
    },
    {
      item: (
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon />
          Twitter
        </TwitterShareButton>
      ),
      tooltip: 'Twitter',
    },
    {
      item: (
        <VKShareButton url={url} title={title} image={image} noParse={!!title}>
          <VKIcon />
          VKontakte
        </VKShareButton>
      ),
      tooltip: 'VKontakte',
    },
  ];
  return socialButtons.slice(len1, len2);
};

export default function ShareBar(props) {
  const { t } = useTranslation();
  const { url, title, summary, image, len } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={shareBox}>
        {shareIcons(url, title, summary, image, 0, len).map((item) => (
          <Tooltip key={item.tooltip} title={item.tooltip}>
            {item.item}
          </Tooltip>
        ))}

        <Button onClick={handleClickOpen}>
          <ShareOutlinedIcon
            sx={{
              color: 'primary.contrastText',
            }}
          />
        </Button>
      </Box>

      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm" sx={dialogBlock}>
        <DialogTitle sx={{ p: 0 }}>{t('common.dialogShare')}</DialogTitle>
        <List sx={dialogList}>
          {shareIcons(url, title, summary, image, 0, 6).map((item, i) => (
            <ListItem disableGutters key={i} onClick={() => handleClose(item)}>
              {item.item}
            </ListItem>
          ))}
        </List>

        <Box sx={copyBox}>
          <Typography variant="body3" sx={linkBlock}>
            {url}
          </Typography>
          <CopyBtn contactName={t('common.copyLink')} copyText={url} close={() => handleClose()} />
        </Box>
      </Dialog>
    </>
  );
}

ShareBar.propTypes = {
  url: PropTypes.string.isRequired,
  len: PropTypes.number.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.string,
};

ShareBar.defaultProps = {
  title: '',
  summary: '',
  image: '',
};
