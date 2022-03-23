import React from 'react'
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Depoimentos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Não é todo dia que você encontra um consultor financeiro apaixonado e confiável. John Doe é um verdadeiro profissional que faz seu trabalho muito bem. Obrigado João!</p>
                        <p><span>Johnson.M.J.</span></p>
                        <p>Director of "Financial Times"</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Em apenas 2 reuniões muito curtas com John ele conseguiu encontrar a solução que atendeu pessoalmente à minha situação e expectativas. Pontual, bem informado e muito confiável.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Diretor na Risktec Solutions Ltda</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Um consultor financeiro muito profissional, que é fiel à sua palavra. John demonstrou uma grande quantidade de integridade no tempo que o conheço, e ele é rápido em responder às minhas preocupações.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Diretor Geral da BPW Global</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
