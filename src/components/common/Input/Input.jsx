import React from 'react';
import shortid from 'shortid';

function Input({ icon, type, placeholder, name, labelText, className }) {
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
      <label htmlFor={id}>{labelText}</label>
      <div className="input">
        {icon && icon}
        <input {...inputProps} />
      </div>
    </div>
  );
}

export default Input;
