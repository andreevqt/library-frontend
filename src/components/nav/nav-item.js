import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';
import style from './style.module.css';

export const NavItem = ({
  to = '/',
  label
}) => {
  const match = useRouteMatch({
    path: to
  });

  return (
    <li className={clsx(style['nav-item'], { [style['nav-item-active']]: match })}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
