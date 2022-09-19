import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router';
import { Input } from '../../components/input';
import { Base } from '../../layouts/base';
import { Select } from '../../components/select';
import * as api from '../../services/api';
import style from './style.module.css';
import { Button } from '../../components/button';
import { schema } from './schema';
import { Preloader } from '../../components/preloader';

const initialValues = {
  title: '',
  genreId: 1,
  authorId: 1
};

export const CreateBooks = ({
  genres,
  authors
}) => {
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (data, { setSubmitting }) => {
    setLoading(true);
    api.books.create(data).then(() => history.push('/books'));
  };

  return (
    <Base title="Create Book">
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleChange,
          values,
          isSubmitting
        }) => (
          <Form>
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
              <Button htmlType="submit" >Create</Button>
            </div>
          </Form>
        )}
      </Formik>
      {isLoading && <Preloader />}
    </Base>
  );
};
