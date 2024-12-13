import Footer from "./footer";
import MainNavigation from "./mainNavigation";
import styles from "./layout.module.scss";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className={styles.skipLink}>
        Hoppa till innehållet
      </a>
      <MainNavigation />
      <main id="main-content" className="flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
