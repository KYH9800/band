// pages/_app.js
import BandPost from '../[id]';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <BandPost>
      <Component {...pageProps} />
    </BandPost>
  );
};

export default MyApp;
