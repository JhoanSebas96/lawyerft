import React from 'react'
import Marquee from "react-fast-marquee"
import banner from '../assets/home.jpg'
import infoImg from '../assets/manos.jpg'
import Card from "../components/Card";


function Home() {
  return (
    <>
      <section className='banner'>
        <img src={ banner } className='img-banner' />
        <h2 className='text-banner'> desarrollo personal de nuestros clientes defendiendo y protegiendo sus derechos jurídicos y legales</h2>
      </section>
      <section className='section-info'>
        <img src={ infoImg } className='info-img' />
        <div className='text-info'>
          <h2 className='title-info'>fabian tamayo abogados</h2>
          <p>{ infoText }</p>
        </div>
      </section>
      <section className='section-area'>
        <div className='area'>
          <Marquee speed={100} autoFill={true}>
            <h2 className='area-title'> areas de actuación </h2>
          </Marquee>
          {areas.map((area, index) =>{
            return(
              <div className='area-des' key={index}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section className="content-casos">
        <div className="casos">
          <div className="casos-info">
            <h2>casos relevantes</h2>
            <p>
              En nuestro despacho de abogados, nos enorgullecemos de nuestra
              trayectoria en la resolución exitosa de casos legales complejos y
              relevantes.
            </p>
          </div>
        </div>
        <div className="cards-container">
          <div className="cards">
            {casos.map((caso, index) => {
              return <Card caso={caso} key={index}></Card>;
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

const infoText = "Somos una firma de abogados dedicados a una profunda investigación de los contextos jurídicos de nuestros clientes, lo que nos permiten \n lograr con anticipación la solución de conflictos, generando resultados garantizados por nuestros expertos en las diferentes áreas jurídicas, a fin de salvaguardar y proteger sus derechos con respeto y ética por la justicia, encajando así nuestro mejor rol con social."

const areas = [
  {
    title: 'derecho \ncivil',
    description: 'Redacción, revisión y negociación de contratos. \n Asesoramiento en materia de responsabilidad civil. \n Tramitación de divorcios, separaciones, herencias y otros asuntos de derecho familiar. \n Representación en casos de propiedad horizontal y arrendamientos.'
  },
  {
    title: 'derecho \npenal',
    description: 'Defensa y acusación en delitos de diversa índole. \n Asistencia a víctimas de violencia de género. \n Representación legal de menores infractores.\n Asesoramiento en materia penitenciaria.'
  },
  {
    title: 'derecho \nlaboral',
    description: `Impugnación de despidos y reclamaciones de salarios. \n Redacción, revisión y negociación de contratos de trabajo. \n Asesoramiento en materia de Seguridad Social. \n Representación en casos de huelgas y conflictos colectivos.`
  },
  {
    title: 'derecho \nadministrativo',
    description: 'Presentación de recursos administrativos contra la Administración Pública. \nTramitación de permisos de residencia y trabajo. \nAsesoramiento en materia de urbanismo y medio ambiente.'
  },
  {
    title: 'entre otros...'
  }
];

const casos = [
  {
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?",
  },
  {
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?",
  },
  {
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, amet dolorem! Debitis, velit quis similique maiores blanditiis nostrum eos voluptas ipsa cumque? Dolores cupiditate nobis beatae vitae non obcaecati soluta?",
  },
];