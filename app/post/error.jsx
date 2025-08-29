'use client';

import React from 'react'

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>This is error page for post</h1>
      <h1>{error.message}</h1>

    </div>
  )
}