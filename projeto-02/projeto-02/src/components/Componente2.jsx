import React, { useState } from 'react';

const MediaNotas = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState(null);

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert('Por favor, insira valores válidos para todas as notas.');
      return;
    }
    
    const mediaCalculada = (n1 + n2 + n3) / 3;
    setMedia(mediaCalculada.toFixed(2)); 
  };

  return (
    <section className='container'>
        <div className='container'>
        <h1>Calculadora de média:</h1>
        <div className='container'>
            <label>P1:
            <input
                type="number"
                value={nota1}
                onChange={(e) => setNota1(e.target.value)}
            />
            </label>
        </div>
        <div className='container'>
            <label>P2:
            <input
                type="number"
                value={nota2}
                onChange={(e) => setNota2(e.target.value)}
            />
            </label>
        </div>
        <div className='container'>
            <label>P3:
            <input
                type="number"
                value={nota3}
                onChange={(e) => setNota3(e.target.value)}
            />
            </label>
        </div>
        <button className='botao' onClick={calcularMedia}>Calcular Média</button>
        {media !== null && (
            <div>
            <h2>Média: {media}</h2>
            </div>
        )}
        </div>
    </section>
  );
};

export default MediaNotas;
