let quantidadeDeJogosAlugados = 1;

function alterarStatus(id) {
    let gameClicado = document.getElementById (`game-${id}`);
    // Precisamos pegar a div e o botão para manipular
    // o ponto dentro dos parênteses representa que estamos pegando uma classe
    // puxar o elemento por querySelector já filtra a parte do código HTML que queremos
    // dentro do li do HTML que selcionamos acima com o ID, podemos filtrar essa parte no HMTL e pegar a classe abaixo para manipular
    let imagem = gameClicado.querySelector ('.dashboard__item__img');
    let botao = gameClicado.querySelector ('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector ('.dashboard__item__name').textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
            if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo}?`)) {
                botao.classList.remove ('dashboard__item__button--return');
                imagem.classList.remove ('dashboard__item__img--rented');
                botao.textContent = 'Alugar';
                quantidadeDeJogosAlugados--;
            };

    } else {
        botao.classList.add ('dashboard__item__button--return');
        imagem.classList.add ('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        quantidadeDeJogosAlugados++;
    };

    
    console.log(`Quantidade de jogos alugados = ${quantidadeDeJogosAlugados}`);

}


