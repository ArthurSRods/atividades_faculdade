import React from 'react'

function Carro(props) {
    return <li>Eu sou um { props.marca }</li>;
  }

const CompGaragem = () => {
    const carros = [
    {id: 1, marca: 'Ford'},
    {id: 2, marca: 'BMW'},
    {id: 3, marca: 'Audi'}
  ];
  return (
    <>
    <section className='conteiner'>
    <h1>Quais carros tem na minha garagem?</h1>
    <ul>
      {carros.map((carro) => <Carro key={carro.id} marca={carro.marca} />)}
    </ul>
    </section>
  </>
  )
}

export default CompGaragem