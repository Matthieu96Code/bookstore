import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
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
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
          >
            {link.text}

          </NavLink>
        </li>
      ))}
    </ul>
    <BsPersonCircle className="user-icon" size="2rem" color="#0290ff" />
  </nav>
);
export default Navbar;
