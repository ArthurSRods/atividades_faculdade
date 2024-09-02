// Adiciona o evento de escuta ao formulário
document.querySelector('form').addEventListener('submit', function (event) {
    // Impede o comportamento padrão do formulário de redirecionar ou recarregar a página
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const dataNasc = document.getElementById('data_nasc').value;

    // Exibe os valores no console
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Endereço:', endereco);
    console.log('Data de Nascimento:', dataNasc);

    // Exibe a mensagem de confirmação
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Dados recebidos com sucesso!';
    mensagem.style.display = 'block';
});
