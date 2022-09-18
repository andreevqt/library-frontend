import React from 'react';
import style from './style.module.css';
import { Nav, NavItem } from '../../components/nav';

export const Base = ({
  children,
  title,
  sidebar
}) => {
  return (
    <div className={style['content']}>
      <Nav>
        <NavItem to="/books" label="Books" />
      </Nav>
      <div className={style['section']}>
        <h2 className={style['title']}>
          {title}
        </h2>
        {children}
      </div>
      <div className={style['sidebar']}>
        {sidebar}
      </div>
    </div>
  );
};
