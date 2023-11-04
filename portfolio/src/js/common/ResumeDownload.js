import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import resumeEn from '../../assets/files/resume-en.pdf';
import resumeRu from '../../assets/files/resume-ru.pdf';
import LoadingBlock from './LoadingBlock';
import pdfIcon from '../../assets/icons/Pdf.png';

const DialogList = lazy(() => import('./DialogList'));
const Download = lazy(() => import('../../assets/svg/Download.svg'));

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
  const { short = false } = props;
  const { t } = useTranslation();
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
      handleDownloadResume(value);
    }
  };

  return (
    <>
      <Tooltip title={t('common.downloadTooltip')}>
        <button
          type="button"
          // eslint-disable-next-line prettier/prettier, max-len
          className={`MyTypography MyTypography-button button_isActive_true download__btn${short ? ' download_short_btn' : ' download_long_btn'}`}
          onClick={handleClickOpen}
        >
          <Suspense fallback={<LoadingBlock width="24px" height="24px" />}>
            <Download className="download-svg MySvg-icon" />
          </Suspense>
          {short ? '' : t('common.downloadTooltip')}
        </button>
      </Tooltip>
      <Suspense fallback=".">
        <DialogList
          open={open}
          onClose={handleClose}
          list={resumeList}
          title={t('common.dialogTitleDl')}
        />
      </Suspense>
    </>
  );
}

ResumeDownload.propTypes = {
  short: PropTypes.bool,
};
