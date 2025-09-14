import React from 'react'


const EditForm = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      this is EditForm of {`${id}`}

    </div>
  )
}
export default EditForm