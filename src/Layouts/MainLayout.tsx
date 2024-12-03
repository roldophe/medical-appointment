import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navigation/Navbar';


const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
