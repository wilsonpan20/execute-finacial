import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Sobre</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Depoimentos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demonstração</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 &copy;todos os direitos reservado wilson evangelista</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
