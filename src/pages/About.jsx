import React from 'react'
import Marquee from "react-fast-marquee"
import  imgAbout  from '../assets/about.jpg'
import imgMision from '../assets/img_mision.jpg'
import imgVision from '../assets/img_vision.jpg'
import imgCasos from '../assets/casos.jpg';
import Card from '../components/Card'

function About() {
  return (
    <>
        <h2 className='title-about'>acerca de <br />fabian tamayo abogados</h2>
        <div className='img-cont'>
            <img src={imgAbout} className='img-about' alt="fabian tamayo abogados" />
        </div>
        {infos.map((info, index) =>{
          return(
            <div className="content-about" key={index}>
              <div className= {`desc-about ${info.title}`}>
                <Marquee speed={100} autoFill={true} >
                  <h2 className='title-desc'>{info.title}</h2>
                </Marquee>
                <p className="text-desc"  >{info.description}</p>
              </div>
              <img src={index % 2 === 0 ? imgMision : imgVision} alt="" className={`img-desc img-${info.title}`} />
            </div>
          )
        })}
        <section className="content-casos">
          <div className='casos'>
            <div className='casos-info'>
              <h2>casos relevantes</h2>
              <div>En nuestro despacho de abogados, nos enorgullecemos de nuestra trayectoria en la resolución exitosa de casos legales complejos y relevantes. Nuestro equipo de abogados experimentados y comprometidos ha resuelto con éxito casos legales complejos y relevantes, obteniendo resultados sobresalientes en cada etapa del proceso.</div>
            </div>
          </div>
          <div className='cards-container'>
            <div className='cards'>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </section>
    </>
  )
}

const infos = [
  {
    title:'mision',
    description: 'Proporcionar a nuestros clientes el mejor servicio de asesoría jurídica en las áreas del derecho, proponiendo soluciones eficaces, y personalizadas, acompañando en la toma de decisiones con fundamento en la ley y la experiencia, con el objetivo final de lograr la satisfacción total de las necesidades reales y dotarles de seguridad jurídica; así como el mejor servicio de representación y defensa de los intereses e imagen de nuestros clientes ante justicia.',
    img:'../assets/img_mision.jpg'
  },
  {
    title:'vision',
    description:'Aspiramos a posicionarnos como una de las firmas más prestigiosas y de referencia en el ámbito nacional, siendo así líderes en todas las materias jurídicas como una empresa de servicios que pase de generación a generación y que sea reconocida por sus altos estándares de calidad, profesionalidad, y por su prestigio y reputación propia y de sus clientes.',
    img:'../assets/img_vision.jpg'
  }
];

const casos = [
  {
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?'
  },
  {
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?'
  },
  {
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?'
  },
]

export default About