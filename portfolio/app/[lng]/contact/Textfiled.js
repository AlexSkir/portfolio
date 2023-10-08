'use client';

import React from 'react';
import PropTypes from 'prop-types';

export default function Textfield(props) {
  const {
    label,
    value,
    onChange,
    id,
    type = 'text',
    required = false,
    component = 'input',
  } = props;
  const [focused, setFocused] = React.useState(false);
  const Tag = component;

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

  return (
    <div
      className={`contact-form__textfield${focused ? ' is_focused' : ''}${value ? ' is_open' : ''}`}
    >
      <label className="contact-form__label" htmlFor={id}>
        {label}
        {required ? <span style={{ fontSize: '16px' }}>＊</span> : ''}
      </label>
      <div className="contact-form__input-wrapper">
        <Tag
          id={id}
          type={type}
          className="contact-form__input"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
        />
      </div>
    </div>
  );
}

Textfield.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  component: PropTypes.string,
};
