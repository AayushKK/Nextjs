'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function postData(val) {
  try {
    await axios.post('https://67d37e878bca322cc26a36c9.mockapi.io/posts', val);
    // return { error: null };
  } catch (err) {
    return { error: 'something went wrong' };
  }

  revalidatePath('/post');
  redirect('/post');

}



export async function deletePost(id) {
  try {
    await axios.delete(`https://67d37e878bca322cc26a36c9.mockapi.io/posts/${id}`);
  } catch (err) {
    return { error: 'Something went wrong' };
  }
  revalidatePath('/post');
  redirect('/post');
}


export async function getPost(id) {
  try {
    const res = await axios.get(`https://67d37e878bca322cc26a36c9.mockapi.io/posts?id=${id}`);
    return res.data; // returns an array
  } catch (err) {
    console.error("Error fetching post:", err.message);
    return []; // return empty array on error
  }
}