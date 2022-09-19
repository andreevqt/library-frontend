import React, { useRef } from 'react';
import style from './style.module.css';
import { Loader } from '../../icons';
import { CSSTransition } from 'react-transition-group';

export const Preloader = ({
  isShown
}) => {
  const ref = useRef(null);
  return (
    <CSSTransition
      timeout={350}
      classNames="transition"
      in={isShown}
      nodeRef={ref}
      unmountOnExit
    >
      <div ref={ref} className={style['preloader']}>
        <Loader width="48" height="48" />
      </div>
    </CSSTransition>
  );
};
