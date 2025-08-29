
import React, { Suspense } from 'react'

import PostList from '../_component/PostList';
import PostLoading from './loading';
import Link from 'next/link';
import Button from '../_component/Button';

export const metadata = () => {
  return {
    title: `Post`,
    description: `This is post`
  }
}

// export const revalidate = 1;
export default async function Page() {

  return (
    <div className='p-5 space-y-5'>
      <div className='flex justify-between'>
        <h1>Post Pages</h1>
        <Link href={"/post/add-post"}><Button children={"Add Post"} /></Link>
      </div>

      <p>Here are the list of posts</p>
      <Suspense fallback={<PostLoading />}>
        <PostList />
      </Suspense>


    </div >
  )
}