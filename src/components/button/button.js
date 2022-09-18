import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './style.module.css';

export const Button = ({
  to,
  onClick,
  children,
  type = 'primary',
  htmlType = 'button'
}) => {
  const isLink = !!to;
  const Component = isLink ? Link : 'button';
  const classes = clsx(style['button'], style[[type]]);

  return (
    <Component
      {...(isLink && { to })}
      {...(!isLink && { type: htmlType })}
      {...(!isLink && onClick && { onClick })}
      className={classes}
    >
      {children}
    </Component>
  );
};
