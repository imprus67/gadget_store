import '../styles/globals.css';
import MainLayout from './../layouts/MainLayout';
import ContextWrapper from '../components/ContextWrapper';
function MyApp({ Component, pageProps }) {

  return (
    <ContextWrapper>
 
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

    </ContextWrapper>
  )
}

export default MyApp;
