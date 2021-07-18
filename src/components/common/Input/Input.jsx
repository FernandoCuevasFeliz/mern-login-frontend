import React from 'react';
import shortid from 'shortid';

import './Input.css';

function Input({ icon, type, placeholder, name, textLabel, className }) {
  const id = shortid();
  const inputProps = {
    id,
    type,
    placeholder,
    name,
    className: 'input__control ' + className,
  };

  return (
    <div className="input-container">
      {textLabel && (
        <label className="input__label" htmlFor={id}>
          {textLabel}
        </label>
      )}
      <div className="input">
        {icon && icon}
        <input {...inputProps} />
      </div>
    </div>
  );
}

export default Input;
