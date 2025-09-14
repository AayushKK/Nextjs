import React from "react"

export default function Page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-center p-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to the Blog App!
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Explore articles, edit your posts, and share your thoughts.
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold mb-2">Add Post</h2>
          <p>Create new posts with ease and share your thoughts.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold mb-2">Edit Post</h2>
          <p>Modify existing posts whenever you need.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <h2 className="text-xl font-bold mb-2">Delete Post</h2>
          <p>Remove posts quickly and safely with confirmation.</p>
        </div>
      </div>
    </div>
  )
}