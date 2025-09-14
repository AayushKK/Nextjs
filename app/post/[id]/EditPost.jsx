import Link from "next/link";
import Button from "../../_component/Button";

const EditPost = ({ postId }) => {


  return (
    <div>
      <Link href={`/post/${postId}/edit-post`}><Button children={"Edit post"} /></Link>
    </div>
  )
}
export default EditPost

