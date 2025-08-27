import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PostList() {
  const response = await axios.get('https://67d37e878bca322cc26a36c9.mockapi.io/posts');;
  const posts = response.data;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {posts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id}
          className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="relative w-full h-56 sm:h-48 lg:h-60">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-2">{post.detail}</p>
            <span className="text-gray-400 text-xs">Post ID: {post.id}</span>
          </div>
        </Link>
      ))}
    </div>

  )
}