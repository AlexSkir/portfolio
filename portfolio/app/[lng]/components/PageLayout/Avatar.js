import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import avatarBase from '../../assets/avatar/avatar-base.png';
import avatarHeart from '../../assets/avatar/avatar-heart.png';
import avatarOk from '../../assets/avatar/avatar-ok.png';
import avatarHi from '../../assets/avatar/avatar-hi.png';
import avatar4042 from '../../assets/avatar/avatar-404.2.png';

export default function Avatar(props) {
  const { avatar, open } = props;
  const [avatarImg, setAvatar] = React.useState(avatarHi);

  React.useEffect(() => {
    if (avatar === 'base') {
      setAvatar(avatarBase);
    } else if (avatar === 'ok') {
      setAvatar(avatarOk);
    } else if (avatar === 'heart') {
      setAvatar(avatarHeart);
    } else if (avatar === 'hi') {
      setAvatar(avatarHi);
    } else {
      setAvatar(avatar4042);
    }
  });

  return (
    <div
      className="side-block__avatar"
      style={{
        display: open ? 'block' : 'none',
      }}
    >
      <Image src={avatarImg} alt="My avatar" width={200} height={200} placeholder="blur" />
    </div>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
