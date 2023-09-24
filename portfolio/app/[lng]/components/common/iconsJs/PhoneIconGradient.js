/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function PhoneIcon(props) {
  const { main, dark } = props;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="21"
        viewBox="0 0 12 21"
        fill="none"
      >
        <path
          d="M10 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H10C10.5304 20.5 11.0391 20.2893 11.4142 19.9142C11.7893 19.5391 12 19.0304 12 18.5V2.5C12 1.96957 11.7893 1.46086 11.4142 1.08579C11.0391 0.710714 10.5304 0.5 10 0.5ZM7 19.5H5V18.5H7V19.5ZM10 17.5H2V3.5H10V17.5Z"
          fill="url(#paint0_linear_27_10)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_27_10"
            x1="6"
            y1="0.5"
            x2="6"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={main} />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

PhoneIcon.propTypes = {
  main: PropTypes.string.isRequired,
  dark: PropTypes.string.isRequired,
};

export default PhoneIcon;
