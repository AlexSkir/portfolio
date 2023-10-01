import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Typography from '../Typography';

export default function DialogList(props) {
  const { onClose, open, list, title } = props;

  const handleClose = () => {
    onClose(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Typography classes="dialog-block__title" variant="h6">
        {title}
      </Typography>
      <ul className="dialog-block__list">
        {list.map((item) => (
          <li className="dialog-block__list-item" key={item.name}>
            <button
              type="button"
              className="dialog-block__button"
              onClick={() => handleListItemClick(item)}
            >
              <div className="dialog-block__avatar-wrapper">
                <div
                  className="dialog-block__avatar"
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
              </div>
              <Typography variant="body1" component="span">
                {item?.name}
              </Typography>
            </button>
          </li>
        ))}
      </ul>
    </Dialog>
  );
}

DialogList.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
