import Header from "./../components/Header";
import Footer from "./../components/Footer";
import styles from "./MainLayout.module.css";
export default function Layout({ children  }) {
  return (
      <>
      <div className={styles.MainWrapper}>
          <Header />
            <main>{children}</main>
          <Footer />
      </div>
      </>
  )
}