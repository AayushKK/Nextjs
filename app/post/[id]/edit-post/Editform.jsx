'use client';

import React, { useTransition } from 'react';
import { Formik } from 'formik';
import { validationSchema } from '../../../_utils/validationschema';
import { updatePost } from '../../../_lib/serverAction';
import Button from '../../../_component/Button';


const EditForm = ({ id, data }) => {
  const [isPending, startTransition] = useTransition();

  const initialValues = {
    title: data?.title || '',
    detail: data?.detail || '',
    image: data?.image || '',
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          startTransition(async () => {
            const { error } = await updatePost(id, values);
            if (error) {
              alert('Something went wrong');
            } else {
              alert('Post edited successfully!');
              resetForm();
            }
          });
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.title && touched.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <textarea
                name="detail"
                placeholder="Detail"
                value={values.detail}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.detail && touched.detail && (
                <p className="text-red-500 text-sm mt-1">{errors.detail}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={values.image}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.image && touched.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>

            <Button type="submit" loading={isPending}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditForm;
