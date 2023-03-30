import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'BOOK' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="menuList">
      {links.map((link) => (
        <li className="listElement" key={link.text}>
          <NavLink to={link.path} className="linkedList">{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
