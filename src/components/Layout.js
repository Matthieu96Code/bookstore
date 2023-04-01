import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="layout">
    <div className="mainbar">
      <h1 className="mainTitle">Bookstore CMS</h1>
      <Navbar />
    </div>
    <Outlet />
  </div>
);

export default Layout;
