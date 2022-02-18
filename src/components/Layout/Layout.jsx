import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <footer>
        <p>Developed by Irchik512</p>
      </footer>
    </>
  );
};
