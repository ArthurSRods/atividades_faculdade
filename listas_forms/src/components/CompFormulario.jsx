import React, { useState } from 'react';

const CompFormulario = () => {
    const [nome, setNome] = useState('');
    const [nomes, setNomes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (nome) {
            setNomes([...nomes, nome]); // Adiciona o nome à lista
            setNome(''); // Limpa o campo de entrada
        }
    };

    return (
        <>
            <section className='conteiner'>
                <form className='formulario' onSubmit={handleSubmit}>
                    <label>
                        Digite seu nome:
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <button type="submit">Adicionar Nome</button>
                </form>

                <h1>Lista de Nomes</h1>
                <ul>
                    {nomes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default CompFormulario;
