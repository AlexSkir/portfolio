'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Tooltip from '@mui/material/Tooltip';
import resumeEn from '../../assets/files/resume-en.pdf';
import resumeRu from '../../assets/files/resume-ru.pdf';
import pdfIcon from '../../assets/icons/pdf.png';
import DialogList from './DialogList';
import { useTranslation } from '../../../i18n/client';

const resumeList = [
  {
    name: 'A. Skirnevskaia - Frontend developer CV (en)',
    icon: pdfIcon.src,
    value: 'en',
  },
  {
    name: 'А. Скирневская - Фронтенд разработчик (ru)',
    icon: pdfIcon.src,
    value: 'ru',
  },
];

export default function ResumeDownload(props) {
  const { btnStyle, short = false } = props;
  const { lng } = useParams();
  const { t } = useTranslation(lng);
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
          {short ? '' : t('common.downloadBtn')}
        </Button>
      </Tooltip>
      <DialogList
        open={open}
        onClose={handleClose}
        list={resumeList}
        title={t('common.dialogTitleDl')}
      />
    </>
  );
}

ResumeDownload.propTypes = {
  short: PropTypes.bool,
  btnStyle: PropTypes.object.isRequired,
};
