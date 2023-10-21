'use client';

import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'next/navigation';
import resumeEn from '../../assets/files/resume-en.pdf';
import resumeRu from '../../assets/files/resume-ru.pdf';
import pdfIcon from '../../assets/icons/pdf.png';
import LoadingBlock from './LoadingBlock';

const DialogList = lazy(() => import('./DialogList'));
const Download = lazy(() => import('../../assets/svg/Download.svg'));

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
  const { classes = '', children = '<></>' } = props;
  const { lng } = useParams();
  const [open, setOpen] = React.useState(false);

  const tooltipText = lng === 'en' ? 'Download Resume' : 'Скачать Резюме';
  const dialogText = lng === 'en' ? 'Choose the language of resume' : 'Выберите язык резюме';

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
      <button type="button" className={`download__btn ${classes}`} onClick={handleClickOpen}>
        <Suspense fallback={<LoadingBlock width="24px" height="24px" />}>
          <Download className="download-svg MySvg-icon" />
        </Suspense>
        {children}
      </button>
      <Suspense fallback=".">
        <DialogList open={open} onClose={handleClose} list={resumeList} title={dialogText} />
      </Suspense>
    </>
  );
}

ResumeDownload.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};
