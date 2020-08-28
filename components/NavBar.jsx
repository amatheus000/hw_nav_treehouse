import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
  <ul className='main-nav'>
      <li>
        <NavLink exact to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/bk'>Burger King</NavLink>
      </li>
      <li>
        <NavLink to='/plk'>Popeyes</NavLink>
      </li>
      <li>
        <NavLink to='/th:adjective'>TimHortons</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
