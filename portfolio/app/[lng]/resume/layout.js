'use client';

import React from 'react';
import LoadingApp from '../components/LoadingApp';

export default function ContactLayout({ children, params }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgb(242, 245, 249)',
        width: '100%',
        height: '100%',
        zIndex: '10000',
      }}
    >
      <LoadingApp />
    </div>
  );
}
