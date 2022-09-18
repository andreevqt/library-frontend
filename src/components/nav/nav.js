import React from 'react';
import style from './style.module.css';

export const Nav = ({ children }) => {
  return (
    <ul className={style['nav']}>
      {children}
    </ul>
  );
};
