import React, { useState } from 'react';

function Objeto(props) {
    return <li>Tenho {props.item}</li>;
}

const CompMochila = () => {
    const [objetos, setObjetos] = useState([
        { id: 1, item: 'chave' },
        { id: 2, item: 'lanterna' },
        { id: 3, item: 'estojo' },
        { id: 4, item: 'caderno' },
    ]);
    
    const [novoItem, setNovoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (novoItem) {
            const novoObjeto = {
                id: objetos.length + 1, // Gera um novo ID
                item: novoItem
            };
            setObjetos([...objetos, novoObjeto]); // Adiciona o novo item à lista
            setNovoItem(''); // Limpa o campo de entrada
        }
    };

    return (
        <>
            <section className='conteiner'>
                <h1>Quais objetos eu tenho na minha mochila?</h1>
                <ul>
                    {objetos.map((objeto) => (
                        <Objeto key={objeto.id} item={objeto.item} />
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label>
                        Adicionar novo item:
                        <input
                            type="text"
                            value={novoItem}
                            onChange={(e) => setNovoItem(e.target.value)}
                        />
                    </label>
                    <button type="submit">Adicionar</button>
                </form>
            </section>
        </>
    );
}

export default CompMochila;
