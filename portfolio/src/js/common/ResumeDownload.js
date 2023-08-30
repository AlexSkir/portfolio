import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Tooltip from '@mui/material/Tooltip';
import resume from '../../assets/files/map.pdf';

export default function ResumeDownload(props) {
  const { t } = useTranslation();
  const { title, btnStyle } = props;
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.download = 'Skirnevskaia Resume';

    link.href = resume;

    link.click();
  };
  return (
    <Tooltip title={t('common.downloadTooltip')}>
      <Button className="button_isActive_true" sx={btnStyle} onClick={handleDownloadResume}>
        <FileDownloadOutlinedIcon
          sx={{
            color: 'secondary.contrastText',
          }}
        />
        {title}
      </Button>
    </Tooltip>
  );
}

ResumeDownload.propTypes = {
  title: PropTypes.string,
  btnStyle: PropTypes.object.isRequired,
};

ResumeDownload.defaultProps = {
  title: '',
};
