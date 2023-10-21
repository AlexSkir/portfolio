'use client';

import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
});

const sharedClass = 'MyTypography';

const myClasses = {
  h1: `${sharedClass} h1-variant`,
  h2: `${sharedClass} h2-variant`,
  h3: `${sharedClass} h3-variant`,
  h4: `${sharedClass} h4-variant`,
  h5: `${sharedClass} h5-variant`,
  h6: `${sharedClass} h6-variant`,
  subtitle1: `${sharedClass} subtitle1-variant`,
  subtitle2: `${sharedClass} subtitle2-variant`,
  body1: `${sharedClass} body1-variant`,
  body2: `${sharedClass} body2-variant`,
  body3: `${sharedClass} body3-variant`,
  left: 'MyAlignText-left',
  right: 'MyAlignText-right',
  center: 'MyAlignText-center',
  justify: 'MyAlignText-justify',
};

const variantMapping = (variant, children, classes, align, component) => {
  const customClass = classes ? ` ${classes}` : '';
  const customAlign = align ? ` ${myClasses[align]}` : '';
  switch (variant) {
    case 'h1':
      return (
        <h1 className={`${myClasses.h1} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`${myClasses.h2} ${roboto.variable} ${customClass}${customAlign}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`${myClasses.h3} ${roboto.variable} ${customClass}${customAlign}`}>
          {children}
        </h3>
      );
    case 'h4':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.h4} ${roboto.variable}${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <h4 className={`${myClasses.h4} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </h4>
      );
    case 'h5':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.h5} ${roboto.variable} ${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <h5 className={`${myClasses.h5} ${roboto.variable} ${customClass}${customAlign}`}>
          {children}
        </h5>
      );
    case 'h6':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.h6} ${roboto.variable}${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <h6 className={`${myClasses.h6} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </h6>
      );
    case 'subtitle1':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.subtitle1} ${roboto.variable} ${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <h4 className={`${myClasses.subtitle1} ${roboto.variable} ${customClass}${customAlign}`}>
          {children}
        </h4>
      );
    case 'subtitle2':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.subtitle2} ${roboto.variable} ${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <p className={`${myClasses.subtitle2} ${roboto.variable} ${customClass}${customAlign}`}>
          {children}
        </p>
      );
    case 'body1':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.body1} ${roboto.variable}${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <p className={`${myClasses.body1} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </p>
      );
    case 'body2':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.body2} ${roboto.variable}${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <p className={`${myClasses.body2} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </p>
      );
    case 'body3':
      if (component) {
        const Tag = component;
        return (
          <Tag className={`${myClasses.body3} ${roboto.variable}${customClass}${customAlign}`}>
            {children}
          </Tag>
        );
      }
      return (
        <p className={`${myClasses.body3} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </p>
      );
    default:
      return (
        <p className={`${myClasses.body1} ${roboto.variable}${customClass}${customAlign}`}>
          {children}
        </p>
      );
  }
};

export { roboto };

export default function Typography(props) {
  const { variant = '', children, classes = false, align = false, component = false } = props;

  return variantMapping(variant, children, classes, align, component);
}
