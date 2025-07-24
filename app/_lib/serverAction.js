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