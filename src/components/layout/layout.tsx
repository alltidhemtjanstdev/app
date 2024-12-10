import Footer from "./footer";
import MainNavigation from "./mainNavigation";

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
