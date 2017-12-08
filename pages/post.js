import Container from '../components/MyLayout.js';
import Markdown from 'react-markdown'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

export default (props) => (
  <Container>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
    <div className="markdown">
     <Markdown source={`
      # Testing 123
      This is our blog post.
      Yes. We can have a [link](/link).
      And we can have a title as well.

      ### This is a title

      And here's the content.
          `}/>
    </div>
    <style jsx global>{`
      .markdown {
        font-size: 18px;
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Container>
);
