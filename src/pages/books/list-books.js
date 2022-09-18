import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Preloader } from '../../components/preloader';
import { Table, TableRow } from '../../components/table';
import { Base } from '../../layouts/base';
import { Button } from '../../components/button';
import * as api from '../../services/api';

export const ListBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetch = () => {
    setLoading(true);
    api.books.list()
      .then(setBooks)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetch();
  }, []);

  const onDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      api.books.delete(id)
        .then(fetch);
    }
  };

  return (
    <Base
      title="Books"
      sidebar={<Button to="/books/create">Create</Button>}>
      <Table>
        {books.map(({ id, title }) => (
          <TableRow
            key={id}
            title={title}
            onDelete={() => onDelete(id)}
            editLink={`/books/edit/${id}`}
          />
        ))}
      </Table>
      {isLoading && (<Preloader />)}
    </Base>
  );
};
