import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from "@emotion/styled";

import Layout from '../../components/Layout';
import posts from '../../data/blogposts.json';


const BlogBody = styled.main`
  width: 70%;
  margin: 10px auto;
`;

const BlogSection = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  margin: 20px auto;
  padding: 10px 20px;

  border-radius: 10px;
  border: 1px solid darkgray;
  background-color: #F0F0F0;
  box-shadow: 1px 1px 5px gray;

  img {
    height: 150px;
    border-radiux: 2px;
    border: 2px solid darkgray;
  }

  @media(max-width: 768px) {
    img {
      grid-row: 1;
      grid-column: span 2;
    }
  }
`;

const Excerpt = styled.div`
  @media(max-width: 768px) {
    grid-row: 2;
    grid-column: span 2;
  }
`;

const LastModified = styled.div`
  font-style: italic;
  color: #606060;
`;


export default function Blog() {
  const router = useRouter();

  return (
    <Layout>
      <h1>My Blog</h1>
      <BlogBody>
        {posts.map(post =>
          <BlogSection key={post.id}>
            {/** Show an excerpt of 50 characters */}
            <Excerpt>
              <h2>{post.title}</h2>
              <p>{post.body.slice(0, 199)} ... <Link
                href={`${router.pathname}/[post]`}
                as={`${router.asPath}/${post.id}`}
              >
                <a>Read more</a>
              </Link></p>
              <LastModified>{new Date(post.lastModified).toLocaleString()}</LastModified>
            </Excerpt>

            <img src={post.imgURL} alt="Cover image" />
          </BlogSection>
        )}
      </BlogBody>
    </Layout>
  );
}