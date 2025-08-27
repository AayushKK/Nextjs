import Image from "next/image";
import axios from "axios";

export default async function Page({ params }) {
  const { id } = params;
  let post = null;

  try {
    const res = await axios.get(`https://67d37e878bca322cc26a36c9.mockapi.io/posts?id=${id}`);
    const allPosts = res.data;
    post = allPosts[0];

    if (!post) {
      throw new Error("Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10 p-6">
      <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{post.detail}</p>
      </div>

      <div className="mt-6 flex justify-between text-gray-500 text-sm">
        <span>Post ID: {post.id}</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
}

