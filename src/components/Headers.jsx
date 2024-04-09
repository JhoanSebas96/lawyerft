import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo_nav.png'
import './Header.css'  



export const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='nav-bar'>
        <Link to={ '/' } ><img
          className='logo'
          src={logo}
          alt='logo'
        /></Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fi fi-br-cross' : 'fi fi-br-menu-burger'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {LinkItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className='nav-links' to={item.url} onClick={closeMobileMenu}>
                  {item.title}
                </ NavLink>
              </li>
            )
          })
          }
        </ul>
      </nav>
    </>
  )
}


const LinkItems = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Nosotros',
    url: '/nosotros'
  }
];