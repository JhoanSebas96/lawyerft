import React from "react";
import Marquee from "react-fast-marquee";
import imgAbout from "../assets/about.jpg";
import imgMision from "../assets/img_mision.jpg";
import imgVision from "../assets/img_vision.jpg";
import { BsPhone, BsGeoAlt, BsEnvelopeAt } from "react-icons/bs";
import { Map } from "../components/Map";

function About() {
  return (
    <>
      <h2 className="title-about">
        acerca de <br />
        fabian tamayo abogados
      </h2>
      <div className="img-cont">
        <img
          src={imgAbout}
          className="img-about"
          alt="fabian tamayo abogados"
        />
      </div>
      {infos.map((info, index) => {
        return (
          <div className="content-about" key={index}>
            <div className={`desc-about ${info.title}`}>
              <Marquee speed={100} autoFill={true}>
                <h2 className="title-desc">{info.title}</h2>
              </Marquee>
              <p className="text-desc">{info.description}</p>
            </div>
            <img
              src={index % 2 === 0 ? imgMision : imgVision}
              alt=""
              className={`img-desc img-${info.title}`}
            />
          </div>
        );
      })}
      <section className="contact-section">
        <div className="contact-head">
          <h2>contacto</h2>
        </div>
        <div className="info-container">
          {contactLinks.map((contactLink, index) => {
            return (
              <div className="contact-card">
                <div className="icon-container">
                  {index === 0 ? (
                    <BsPhone className="icon-contact"/>
                  ) : index === 1 ? (
                    <BsGeoAlt className="icon-contact"/>
                  ) : (
                    <BsEnvelopeAt className="icon-contact"/>
                  )}
                </div>
                <div>
                  <h3>{contactLink.title}</h3>
                  <p>{contactLink.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="map-container">
          <Map />
        </div>
      </section>
    </>
  );
}

const infos = [
  {
    title: "mision",
    description:
      "Proporcionar a nuestros clientes el mejor servicio de asesoría jurídica en las áreas del derecho, proponiendo soluciones eficaces, y personalizadas, acompañando en la toma de decisiones con fundamento en la ley y la experiencia, con el objetivo final de lograr la satisfacción total de las necesidades reales y dotarles de seguridad jurídica; así como el mejor servicio de representación y defensa de los intereses e imagen de nuestros clientes ante justicia.",
  },
  {
    title: "vision",
    description:
      "Aspiramos a posicionarnos como una de las firmas más prestigiosas y de referencia en el ámbito nacional, siendo así líderes en todas las materias jurídicas como una empresa de servicios que pase de generación a generación y que sea reconocida por sus altos estándares de calidad, profesionalidad, y por su prestigio y reputación propia y de sus clientes.",
  },
];



const contactLinks = [
  {
    title: "Celular",
    description: "+57 310 295 9505",
  },
  {
    title: "Dirección",
    description: "Diag. 15 # 15 - 70 Ed. San Miguel - Oficina 301",
  },
  {
    title: "Correo Electrónico",
    description: "fabiantamayo.abogado@hotmail.com",
  },
];

export default About;
