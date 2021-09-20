import '../styles/globals.css';
import MainLayout from './../layouts/MainLayout';
import { AppWrapper } from '../context/state';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppWrapper>
  )
}

export default MyApp
