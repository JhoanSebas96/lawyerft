import React, { useState, useEffect } from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { BsWhatsapp, BsEnvelopeAt , BsGeoAltFill, } from "react-icons/bs";
import footlogo from '../assets/footer_logo.png'


export const Footer = () => {


    const [smallScreen, setSmallScreen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setSmallScreen(window.innerWidth < 960);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className='footer'>
        <div className='foot-items'>
          <ul className='foot-links'>
            {LinkItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className='footer-link' to={item.url}> {item.title} </Link>
                </li>
              )
            })}
          </ul>
          <img src={ footlogo } className='logo-footer' alt='CSU-AREANDINA' />
          <div className='contact-item'>
            <p> <BsGeoAltFill className='icon-foot'/>{ ContactItems.add }</p>
            <p><BsWhatsapp className='icon-foot'/> { ContactItems.phone }</p>
            <p><BsEnvelopeAt className='icon-foot'/>{ ContactItems.mail }</p>
          </div>
        </div>
        <div className='copy-footer'>
          © 2023 - Fabian Tamayo Abogados 
        </div>
      </div>
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
  
  const ContactItems = {
        phone: '+57 310 295 9505',
        add: 'Diag. 15 # 15-70 - Oficina 301 Edificio San Miguel.',
        mail: 'fabiantamayo.abogado@hotmail.com'
    }