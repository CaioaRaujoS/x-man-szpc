/*esse é um comentário
const itemCiclope = document.getElementById('ciclope'); // BUSCAR UM ELEMENTO PELO ID

personagens.addEventListener('click', () => {
    console.log('clicou');
}) // AÇÃO / FUNÇÃO DE SETA (EVENTO)
*/
/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
    passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
    passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
    passo 2 - alterar a imagem do personagem grande
    passo 3 - alterar o nome do personagem grande
    passo 4 - alterar a descrição do personagem grande

    para comentar 
    em outras linhas
    ctrl + . + , para comentar automatico
*/
/*
OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
    passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
*/

const personagens = document.querySelectorAll(".personagem"); // BUSCAR POR TODOS O SELETORES / BUSCAR UMA LISTA

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidthc < 450) 
        {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        removerSeleçãodoPersonagem();
        personagem.classList.add('selecionado'); //pegar a lista de classe / classlist é uma propriedade PARTE 2  
        
        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        // passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        AlterarImagemPersonagemSelecionado(personagem); // PARA PEGAR AS IMAGEMS COM O VALOR DELAR USAR CRASE E COM ${} É POSSIVEL COLOCAR A VARIAVEL

        // passo 3 - alterar o nome do personagem grande
        AlterarNomePersonagemSelecionado(personagem);

        // passo 4 - alterar a descrição do personagem grande
        AlterarDescricaoPersonagem(personagem);
    
    })
})





function AlterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function AlterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    // passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSeleçãodoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado'); // PROCURANDO UM ELEMENTO SÓ, DIFERENTE DO ALL QUE BUSCA TODA LISTA
    personagemSelecionado.classList.remove('selecionado');
}

