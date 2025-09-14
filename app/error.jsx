'use client';

import React from 'react'

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Hello the error has occured:</h1>
      <h1>{error.message}</h1>

    </div>
  )
}