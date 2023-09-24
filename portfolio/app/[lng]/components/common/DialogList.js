import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

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
      <DialogTitle>{title}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {list.map((item) => (
          <ListItem disableGutters key={item.name}>
            <ListItemButton onClick={() => handleListItemClick(item)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.light' }} src={item.icon} />
              </ListItemAvatar>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

DialogList.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
