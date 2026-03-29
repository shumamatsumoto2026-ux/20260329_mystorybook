import React from 'react';
import './my-button.css';

export const MyButton = ({ primary, label, backgroundColor, ...props }) => {
  const mode = primary ? 'my-button--primary' : 'my-button--secondary';
  return (
    <button
      type="button"
      className={['my-button', mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};