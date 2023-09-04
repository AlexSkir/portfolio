import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import resumeEn from '../../assets/files/resume-en.pdf';
import resumeRu from '../../assets/files/resume-ru.pdf';
import pdfIcon from '../../assets/images/icons/pdf.png';
import DialogList from './DialogList';

const resumeList = [
  {
    name: 'A. Skirnevskaia - Frontend developer CV (en)',
    icon: pdfIcon,
    value: 'en',
  },
  {
    name: 'А. Скирневская - Фронтенд разработчик (ru)',
    icon: pdfIcon,
    value: 'ru',
  },
];

export default function ResumeDownload(props) {
  const { t } = useTranslation();
  const { title, btnStyle } = props;
  const [open, setOpen] = React.useState(false);

  const handleDownloadResume = (value) => {
    const link = document.createElement('a');
    link.download = `${value.name}.pdf`;
    link.href = value.value === 'en' ? resumeEn : resumeRu;

    link.click();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if (value) {
      console.log(value);
      handleDownloadResume(value);
    }
  };

  return (
    <>
      <Tooltip title={t('common.downloadTooltip')}>
        <Button className="button_isActive_true" sx={btnStyle} onClick={handleClickOpen}>
          <FileDownloadOutlinedIcon
            sx={{
              color: 'secondary.contrastText',
            }}
          />
          {title}
        </Button>
      </Tooltip>
      <DialogList open={open} onClose={handleClose} list={resumeList} />
    </>
  );
}

ResumeDownload.propTypes = {
  title: PropTypes.string,
  btnStyle: PropTypes.object.isRequired,
};

ResumeDownload.defaultProps = {
  title: '',
};
