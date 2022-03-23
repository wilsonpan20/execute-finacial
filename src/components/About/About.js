import React from 'react'
import john from '../../components/images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Sobre</h2>
                    <span className='line'></span>
                    <p>A Intense é uma empresa de Planejamento Financeiro Internacional com escritórios em várias jurisdições ao redor do mundo. Trabalhar com a Intense me dá a capacidade de aconselhar expatriados internacionais que vivem no Oriente Médio de onde moro nos EUA.</p>
                    <p>Sou John Doe, consultor sênior de uma empresa de planejamento financeiro independente chamada Intense.</p>
                    <button className='button'>Explore mais</button>
                </div>
            </div>
        </div>
    )
}

export default About
