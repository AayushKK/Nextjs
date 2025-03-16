'use server';

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function addPost(prev, FormData) {
  try {
    await axios.post('https://67d37e878bca322cc26a36c9.mockapi.io/posts', {
      title: FormData.get('title'),
      detail: FormData.get('detail'),
      image: FormData.get('image')

    });
    revalidatePath('/post');
    redirect('/post');
  } catch (error) {

  }

}