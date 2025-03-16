import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PostList() {
  const response = await axios.get('https://67d37e878bca322cc26a36c9.mockapi.io/posts');;
  const posts = response.data;
  return (
    <div className='space-y-4'>
      {posts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id} className='shadow p-3 cursor-pointer block'>
          <h2>{post.title}</h2>

          <Image
            height={200}
            width={200}
            src={post.image} alt='image'
            className='py-3'
          />
          <p>{post.detail}</p>
        </Link>
      ))}
    </div>
  )
}