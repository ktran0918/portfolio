import styled from "@emotion/styled";
import Layout from "../components/Layout";

const AboutBody = styled.main`
  width: 70%;
  margin: 10px auto;
`;

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <AboutBody>
        <p>Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p>
      </AboutBody>
    </Layout>
  );
}