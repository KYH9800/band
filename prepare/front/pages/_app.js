// pages/_app.js
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
//CSS
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default wrapper.withRedux(MyApp);
