import React from 'react'

const Componente1 = () => {
    const handleClick = (e) => {
        console.log(e)
        alert('Evento com função!')
    }

        const callNames = () => {alert('Testando')}

    return(
        <>
        <section className='container'>
        <div className='container'>
        <button className='botao' onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
        Clique Aqui
    </button>
   
        <button className='botao' onClick = {handleClick}> Clique com Função</button>
        <button className='botao' onClick = {callNames}> Clique com Função</button>    
        </div>
        </section>
        </>
    )
}

export default Componente1