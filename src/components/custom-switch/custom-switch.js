import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateBooks, ListBooks } from '../../pages';
import { EditBooks } from '../../pages/books/edit-books';
import * as api from '../../services/api';

export const CustomSwitch = () => {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api.authors.list()
      .then((items) => items.map(({ id, name }) => ({ label: name, value: id })))
      .then(setAuthors);
    api.genres.list()
      .then((items) => items.map(({ id, title }) => ({ label: title, value: id })))
      .then(setGenres);
  }, []);

  return (
    <Switch>
      <Route path="/books/create">
        <CreateBooks genres={genres} authors={authors} />
      </Route>
      <Route path="/books/edit/:id">
        <EditBooks genres={genres} authors={authors} />
      </Route>
      <Route path="/books">
        <ListBooks />
      </Route>
      <Route path="/">
        <Redirect to="/books" />
      </Route>
    </Switch>
  );
};
