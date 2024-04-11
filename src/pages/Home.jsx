import React from 'react'
import banner from '../assets/home.jpg'
import infoImg from '../assets/manos.jpg'


function Home() {
  return (
    <>
      <div className='banner'>
        <img src={ banner } className='img-banner' />
        <p className='text-banner'> desarrollo personal de nuestros clientes defendiendo y protegiendo sus derechos jurídicos y legales</p>
      </div>
      <div className='info'>
        <img src={ infoImg } className='info-img' />
        <div className='text-info'>
          <h2 className='title-info'>fabian tamayo abogados</h2>
          <p>{ infoText }</p>
        </div>
      </div>
      <div className='section-area'>
        <div className='area'>
          <h2 className='area-title'>areas de actuación</h2>
          <div className='area-des'>
            <div>01.</div>
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe ea neque nihil placeat possimus inventore reprehenderit quibusdam maiores sequi. Doloribus alias quia maiores vero porro blanditiis quas deserunt dolore.</p>
            <div>icon</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

const infoText = "Somos una firma de abogados dedicados a una profunda investigación de los contextos jurídicos de nuestros clientes, lo que nos permiten lograr con anticipación la solución de conflictos, generando resultados garantizados por nuestros expertos en las diferentes áreas jurídicas, a fin de salvaguardar y proteger sus derechos con respeto y ética por la justicia, encajando así nuestro mejor rol con social."

const areas = [
  {
    title: 'derecho civil',
    description: 'Redacción, revisión y negociación de contratos. \nAsesoramiento en materia de responsabilidad civil. \nTramitación de divorcios, separaciones, herencias y otros asuntos de derecho familiar. \nRepresentación en casos de propiedad horizontal y arrendamientos.'
  },
  {
    title: 'derecho civil',
    description: 'Defensa y acusación en delitos de diversa índole. \nAsistencia a víctimas de violencia de género. \nRepresentación legal de menores infractores.\nAsesoramiento en materia penitenciaria.'
  },
  {
    title: 'derecho civil',
    description: 'Impugnación de despidos y reclamaciones de salarios. \n Redacción, revisión y negociación de contratos de trabajo. \n Asesoramiento en materia de Seguridad Social. \nRepresentación en casos de huelgas y conflictos colectivos.'
  },
  {
    title: 'derecho civil',
    description: 'Presentación de recursos administrativos contra la Administración Pública. \nTramitación de permisos de residencia y trabajo. \nAsesoramiento en materia de urbanismo y medio ambiente.'
  }
]