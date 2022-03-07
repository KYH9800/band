import { useRouter } from 'next/router';
import Band from '../band/[id]';

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  console.log(router.query);

  return (
    <>
      <Band />
      <h1>Slug: {slug.join('/')}</h1>
    </>
  );
};

export default Comment;
