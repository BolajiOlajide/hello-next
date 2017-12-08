import Container from '../components/MyLayout.js';

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

export default (props) => (
  <Container>
    <Content url={props.url} />
  </Container>
);
