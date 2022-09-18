import React, { useMemo } from 'react';
import shortid from 'shortid';
import style from './style.module.css';

export const Select = ({
  label,
  selected,
  options = [],
  onChange,
  onBlur
}) => {
  const id = useMemo(() => shortid(), []);

  return (
    <div className={style['field']}>
      <label htmlFor={id} className={style['label']}>{label}</label>
      <select id={id} className={style['select']} onChange={onChange} onBlur={onBlur} value={selected}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
