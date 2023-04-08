import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="Bookstore-CMS">
    <div className="panel-bg">
      <h1 className="mainTitle">Bookstore CMS</h1>
      <Navbar />
    </div>
    <Outlet />
  </div>
);

export default Layout;
