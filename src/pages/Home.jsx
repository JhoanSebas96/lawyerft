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
          {areas.map((area, index) =>{
            return(
              <div className='area-des'>
                <div>0{index + 1}.</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div>icon</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

const infoText = "Somos una firma de abogados dedicados a una profunda investigación de los contextos jurídicos de nuestros clientes, lo que nos permiten \n lograr con anticipación la solución de conflictos, generando resultados garantizados por nuestros expertos en las diferentes áreas jurídicas, a fin de salvaguardar y proteger sus derechos con respeto y ética por la justicia, encajando así nuestro mejor rol con social."

const areas = [
  {
    title: 'derecho civil',
    description: 'Redacción, revisión y negociación de contratos. \n Asesoramiento en materia de responsabilidad civil. \n Tramitación de divorcios, separaciones, herencias y otros asuntos de derecho familiar. \n Representación en casos de propiedad horizontal y arrendamientos.'
  },
  {
    title: 'derecho civil',
    description: 'Defensa y acusación en delitos de diversa índole. \n Asistencia a víctimas de violencia de género. \n Representación legal de menores infractores.\n Asesoramiento en materia penitenciaria.'
  },
  {
    title: 'derecho civil',
    description: `Impugnación de despidos y reclamaciones de salarios. \n Redacción, revisión y negociación de contratos de trabajo. \n Asesoramiento en materia de Seguridad Social. \n Representación en casos de huelgas y conflictos colectivos.`
  },
  {
    title: 'derecho civil',
    description: 'Presentación de recursos administrativos contra la Administración Pública. \nTramitación de permisos de residencia y trabajo. \nAsesoramiento en materia de urbanismo y medio ambiente.'
  }
]