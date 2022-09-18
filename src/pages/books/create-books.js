import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Input } from '../../components/input';
import { Base } from '../../layouts/base';
import { Select } from '../../components/select';
import * as api from '../../services/api';
import style from './style.module.css';
import { Button } from '../../components/button';
import { schema } from './schema';

const initialValues = {
  title: '',
  genreId: 1,
  authorId: 1
};

export const CreateBooks = ({
  genres,
  authors
}) => {
  const handleSubmit = (data, { setSubmitting }) => {
    api.books.create(data).finally(() => setSubmitting(false));
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
              name="genere"
              label="Genre"
              options={genres}
            />
            <Select
              value={values.authorId}
              name="author"
              label="Author"
              options={authors}
            />
            <div className={style['buttons']}>
              <Button htmlType="submit" >Create</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Base>
  );
};
