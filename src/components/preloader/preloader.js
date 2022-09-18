import React from 'react';
import style from './style.module.css';
import { Loader } from '../../icons';

export const Preloader = () => (
  <div className={style['preloader']}>
    <Loader width="48" height="48" />
  </div>
);
