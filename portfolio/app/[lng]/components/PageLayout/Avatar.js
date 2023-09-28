import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Avatar(props) {
  const { img, open } = props;

  return (
    <div
      className="side-block__avatar"
      style={{
        display: open ? 'block' : 'none',
      }}
    >
      <Image src={img} alt="My avatar" width={200} height={200} placeholder="blur" />
    </div>
  );
}

Avatar.propTypes = {
  img: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};
