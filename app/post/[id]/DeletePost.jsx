"use client";
import React, { useTransition, useState } from "react";
import { deletePost } from "../../_lib/serverAction";
import Button from "../../_component/Button";


export default function DeletePost({ postId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(() => {
      deletePost(postId);
    });
    setIsOpen(false);
  };

  return (
    <div>

      <Button onClick={() => setIsOpen(true)} bgColor="bg-red-500" hoverColor="hover:bg-red-600">
        Delete
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this post?</p>

            <div className="flex justify-end space-x-4">
              {/* Cancel Button */}
              <Button
                onClick={() => setIsOpen(false)}
                bgColor="bg-gray-300"
                hoverColor="hover:bg-gray-400"
                textColor="text-gray-700"
              >
                Cancel
              </Button>

              {/* Confirm Delete Button */}
              <Button
                onClick={handleDelete}
                loading={isPending}
                bgColor="bg-red-500"
                hoverColor="hover:bg-red-600"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
