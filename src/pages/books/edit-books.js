import React, { useEffect, useState, useMemo } from 'react';
import { Formik, Form } from 'formik';
import { useParams, useHistory } from 'react-router';
import { Input } from '../../components/input';
import { Base } from '../../layouts/base';
import { Select } from '../../components/select';
import * as api from '../../services/api';
import style from './style.module.css';
import { Button } from '../../components/button';
import { schema } from './schema';
import { Preloader } from '../../components/preloader';

export const EditBooks = ({
  genres,
  authors
}) => {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const getBook = () => {
    setLoading(true);
    api.books.get(id).then(setBook).then(() => setLoading(false));
  };

  useEffect(() => {
    getBook();
  }, [id]);

  const handleSubmit = (data, { setSubmitting }) => {
    setLoading(true);
    api.books.update(id, data).then(() => history.push('/books'));
  };

  return (
    <Base title="Update Book">
      <Formik
        enableReinitialize={true}
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          title: book ? book.title : '',
          authorId: book ? book.author.id : 1,
          genreId: book ? book.genre.id : 1
        }}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          values,
          isSubmitting
        }) => (
          <Form >
            <Input
              name="title"
              label="Title"
              value={values.title}
              error={!!(touched.title && errors.title)}
              errorText={errors.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Select
              value={values.genreId}
              name="genreId"
              label="Genre"
              options={genres}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Select
              value={values.authorId}
              name="authorId"
              label="Author"
              options={authors}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={style['buttons']}>
              <Button htmlType="submit">Update</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Preloader isShown={isLoading} />
    </Base>
  );
};
