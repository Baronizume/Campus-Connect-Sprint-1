import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>
        {children || <p>Main content goes here.</p>}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
