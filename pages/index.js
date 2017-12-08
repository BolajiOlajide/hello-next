import Link from 'next/link';

// components
import Container from '../components/MyLayout';
import PostLink from '../components/PostHyperLink';

const Index = () => (
  <Container>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Container>
);

export default Index;
