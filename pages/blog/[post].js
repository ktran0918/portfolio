import { useRouter } from "next/router";
import ErrorPage from 'next/error';
import styled from '@emotion/styled';

import Layout from '../../components/Layout';
import posts from '../../data/blogposts.json';


const PostBody = styled.section`
  width: 70%;
  display: block;
  margin: 10px auto;

  img {
    height: 200px;
    display: block;
    margin: auto;
  }
`;

const LastModified = styled.p`
  color: #606060;
  font-style: italic;
`;

export default function Post() {
  const router = useRouter();
  console.log(router.pathname, router.asPath);
  const postId = router.query.post;
  const post = posts.find(post => post.id == postId);
  if (!post) {
    return <ErrorPage statusCode="404" />;
  }
  // split post body by newline
  const paragraphs = post.body.split('\n');

  return (
    <Layout>
      <h1>{post.title}</h1>
      <PostBody>
        <img src={post.imgURL} alt="Cover image" />
        <LastModified>
          {new Date(post.lastModified).toLocaleString()}
        </LastModified>
        {/** post body */}
        {paragraphs.map(para =>
          <p>{para}</p>
        )}
      </PostBody>
    </Layout>
  );
}