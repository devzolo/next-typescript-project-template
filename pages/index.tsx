import { NextPage } from 'next';

interface MyPropsInterface {
  userAgent: string;
}

const App: NextPage<MyPropsInterface> = ({ userAgent }) => <p>Hello world! - user agent: {userAgent}</p>;

App.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default App;
