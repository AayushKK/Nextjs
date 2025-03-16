'use client';


import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useActionState } from 'react';


export default function Page() {
  const router = useRouter();
  const postAdd = async (prev, formData) => {
    try {
      await axios.post('https://67d37e878bca322cc26a36c9.mockapi.io/posts', {
        title: formData.get('title'),
        detail: formData.get('detail'),
        image: formData.get('image'),
      });
      router.back();
    } catch (error) {

    }
  }
  const [result, formSubmit, pending] = useActionState(postAdd, null);
  return (

    <div className='p-4'>

      <form action={formSubmit} className='space-y-5'>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Title'
            type="text" name='title' />
        </div>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Detail'
            type="text" name='detail' />
        </div>
        <div>
          <input
            className='border-2 px-2 focus:outline'
            placeholder='Image'
            type="text" name='image' />
        </div>




        <button
          className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer'>
          <div className='flex gap-2 items-center'>
            {pending && <div className='h-5 w-5 border-2 border-t-red-500 rounded-full animate-spin'>

            </div>}
            <span> Submit</span>
          </div>


        </button>
      </form>
      {/* <Formik
        initialValues={{
          title: '',
          detail: '',
          image: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="detail"
              value={values.detail}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              value={values.image}
              onChange={handleChange}/>
            
          </form>
        )}
      </Formik> */}


    </div>
  )
}