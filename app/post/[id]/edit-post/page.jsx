import { getPost } from '../../../_lib/serverAction';
import EditForm from './Editform';


export default async function Page({ params }) {
  const { id } = await params;
  const data = await getPost(id);

  return <EditForm id={id} data={data[0]} />;
};


