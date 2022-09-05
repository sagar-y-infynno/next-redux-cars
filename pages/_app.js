import store from '../app/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import "react-image-gallery/styles/css/image-gallery.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  )
}

// export default wrapper.withRedux(MyApp);
export default MyApp;
