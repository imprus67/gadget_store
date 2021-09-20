import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SubHeader from '../components/SubHeader';

export default function Layout({ children  }) {
  return (
      <>
          <Header />

            <main>{children}</main>
          <Footer />
      </>
  )
}