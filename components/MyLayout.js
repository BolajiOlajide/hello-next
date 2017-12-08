import Header from './Header';

const layoutStyle = {
  margin: 70,
  padding: 40,
  border: '2px solid #000',
  backgroundColor: 'beige'
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;