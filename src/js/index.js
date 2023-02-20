/*

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer , devemos abrir a modal com o video do trailer

    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    - passo 3 - dar um jeito de pegar o elemento da modal no js 

    - passo 4 = abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js

    - passo 2 - dar um jeito de identificar quando o usuário clicar no X

    - passo 3 = fechar modal

*/

// OBJETIVO 1 - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
// OBJETIVO 2 - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");
const linkDoVideo = video.src;

// OBJETIVO 1 - passo 3 - dar um jeito de pegar o elemento da modal no js 
const modal = document.querySelector(".modal");

function alternarModal() {
    modal.classList.toggle("aberto");
}

// OBJETIVO 1 - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // OBJETIVO 1 - passo 4 = abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// OBJETIVO 2  - passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // OBJETIVO 2  - passo 3 = fechar modal
    alternarModal();
    video.setAttribute("src", "")
});





