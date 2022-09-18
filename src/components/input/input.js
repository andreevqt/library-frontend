import React, { useMemo } from 'react';
import clsx from 'clsx';
import style from './style.module.css';
import shortid from 'shortid';

export const Input = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  errorText
}) => {
  const id = useMemo(() => shortid(), []);

  return (
    <div className={style['field']}>
      <label htmlFor={id} className={style['label']}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(style['input'], { [style['error']]: error })}
      />
      {error && (
        <div className={style['error-msg']}>
          {errorText}
        </div>
      )}
    </div>
  );
};
