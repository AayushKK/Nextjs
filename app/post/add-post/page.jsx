'use client';

import { Formik } from 'formik';
import React, { useTransition } from 'react'
import { postData } from '../../_lib/serverAction';


export default function Page() {

  const [isPending, setTransition] = useTransition();

  return (


    <div className='p-4 '>


      <Formik
        initialValues={{
          title: '',
          detail: '',
          image: '',
        }}
        onSubmit={(val) => {
          setTransition(async () => {
            const { error } = await postData(val);
            if (error) {
              alert('something went wrong')
            }
          });

        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <input
                className='border'
                placeholder='Title'
                name='title'
                onChange={handleChange}
                value={values.title}
                type="text" />

            </div>

            <div>
              <input
                className='border'
                placeholder='Detail'
                name='detail'
                onChange={handleChange}
                value={values.detail}
                type="text" />
            </div>


            <div>
              <input
                className='border'
                placeholder='Image Url'
                name='image'
                onChange={handleChange}
                value={values.image}
                type="text" />
            </div>


            {isPending ? <div>Loading...</div> : <button type='submit' className='cursor-pointer bg-black text-white px-4 py-1 rounded-lg'>Submit</button>}


          </form>
        )}
      </Formik>

    </div>
  )
}