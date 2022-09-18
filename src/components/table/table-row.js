import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './style.module.css';

export const TableRow = ({
  title,
  editLink,
  onDelete
}) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className={style['row']} >
      <Link className={style['text']} to={editLink}>{title}</Link>
      <button className={clsx(style['button'], style['trash'])} onClick={handleDelete} />
    </div>
  );
};
