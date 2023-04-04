import React from 'react';
import { NavLink } from 'react-router-dom';
import { link } from './buttons';

export default function Navbar() {
  return (
    <div>
      <ul className="links">
        {link.map((route) => (
          <li key={route.text}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
