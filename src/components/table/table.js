import React from 'react';
import style from './style.module.css';

export const Table = ({ children }) => {
  return (
    <div className={style['table']}>
      {children}
    </div>
  );
};
