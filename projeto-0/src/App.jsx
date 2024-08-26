import { useState } from 'react';
import './App.css';

const Questionario = () => {
  const [respostas, setRespostas] = useState({});

  const respostasCorretas = {
    questao1: 'CSS',
    questao2: 'Falso',
    questao3: 'Componentes',
    questao4: 'Verdadeiro',
    questao5: 'Uma biblioteca open-source para criar interfaces de usuário com JavaScript.'
  };

  const handleChange = (e, questaoId) => {
    setRespostas({
      ...respostas,
      [questaoId]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const acertos = validarRespostas();
    alert(`Você acertou ${acertos} de 5 questões.`);
  };

  const validarRespostas = () => {
    let acertos = 0;
    for (const [questao, resposta] of Object.entries(respostasCorretas)) {
      if (respostas[questao] === resposta) {
        acertos += 1;
      }
    }
    return acertos;
  };

  return (
    <div>
      <h1 className='tituloQuestionario'>Questionário</h1>
      <form onSubmit={handleSubmit}>
        <div className="questao">
          <p><b>1.</b> Qual é a linguagem de estilo utilizada para descrever a apresentação visual de um documento HTML?</p>
          <label>
            <input
              type="radio"
              name="questao1"
              value="Python"
              onChange={(e) => handleChange(e, 'questao1')}
            />
            Python
          </label>
          <label>
            <input
              type="radio"
              name="questao1"
              value="CSS"
              onChange={(e) => handleChange(e, 'questao1')}
            />
            CSS
          </label>
          <label>
            <input
              type="radio"
              name="questao1"
              value="Javascript"
              onChange={(e) => handleChange(e, 'questao1')}
            />
            Javascript
          </label>
          <label>
            <input
              type="radio"
              name="questao1"
              value="HTML"
              onChange={(e) => handleChange(e, 'questao1')}
            />
            HTML
          </label>
        </div>

        <div className="questao">
          <p><b>2.</b> A linguagem HTML é uma linguagem de programação.</p>
          <label>
            <input
              type="radio"
              name="questao2"
              value="Verdadeiro"
              onChange={(e) => handleChange(e, 'questao2')}
            />
            Verdadeiro
          </label>
          <label>
            <input
              type="radio"
              name="questao2"
              value="Falso"
              onChange={(e) => handleChange(e, 'questao2')}
            />
            Falso
          </label>
        </div>

        <div className="questao">
          <p><b>3.</b> Constituem a unidade básica de construção no react, podendo ser declarados como classes ou funções. São os:</p>
          <label>
            <input
              type="radio"
              name="questao3"
              value="Bits"
              onChange={(e) => handleChange(e, 'questao3')}
            />
            Bits
          </label>
          <label>
            <input
              type="radio"
              name="questao3"
              value="Utilitários"
              onChange={(e) => handleChange(e, 'questao3')}
            />
            Utilitários
          </label>
          <label>
            <input
              type="radio"
              name="questao3"
              value="Componentes"
              onChange={(e) => handleChange(e, 'questao3')}
            />
            Componentes
          </label>
          <label>
            <input
              type="radio"
              name="questao3"
              value="Aplicativos"
              onChange={(e) => handleChange(e, 'questao3')}
            />
            Aplicativos
          </label>
        </div>
        
        <div className="questao">
          <p><b>4.</b> Em Javascript, as funções podem ser definidas como blocos de código que realizam uma tarefa específica.</p>
          <label>
            <input
              type="radio"
              name="questao4"
              value="Verdadeiro"
              onChange={(e) => handleChange(e, 'questao4')}
            />
            Verdadeiro
          </label>
          <label>
            <input
              type="radio"
              name="questao4"
              value="Falso"
              onChange={(e) => handleChange(e, 'questao4')}
            />
            Falso
          </label>
        </div>
        
        <div className="questao">
          <p><b>5.</b> O que é o React?</p>
          <label>
            <input
              type="radio"
              name="questao5"
              value="Uma linguagem de marcação utilizada para estruturar páginas web e o seu conteúdo"
              onChange={(e) => handleChange(e, 'questao5')}
            />
            Uma linguagem de marcação utilizada para estruturar páginas web e o seu conteúdo.
          </label>
          <br></br>
          <label>
            <input
              type="radio"
              name="questao5"
              value="Uma biblioteca open-source para criar interfaces de usuário com JavaScript."
              onChange={(e) => handleChange(e, 'questao5')}
            />
            Uma biblioteca open-source para criar interfaces
            de usuário com JavaScript.
          </label>
          <br></br>
          <label>
            <input
              type="radio"
              name="questao5"
              value="Uma linguagem de estilo usada para descrever a apresentação de um documento HTML."
              onChange={(e) => handleChange(e, 'questao5')}
            />
            Uma linguagem de estilo usada para descrever a
            apresentação de um documento HTML.
          </label>
          <br></br>
          <label>
            <input
              type="radio"
              name="questao5"
              value="API que permite uma linguagem de programação manipular HTML e CSS."
              onChange={(e) => handleChange(e, 'questao5')}
            />
            API que permite uma linguagem de programação
            manipular HTML e CSS.
          </label>
          <br></br>
        </div>
        <br></br>

        <button type="submit" className='botão'>Enviar Respostas</button>
      </form>
    </div>
  );
};

export default Questionario;
