// EXERCÍCIOS - DERYCK ERSCHING ZEZUINO

// Bloco 1 — classList
 

// 1. Selecione o <h1> e adicione a classe destaque a ele.

const elemento = document.getElementById("titulo");
elemento.classList.add("destaque");

// 2. Selecione o #produto-1 e adicione a classe ativo.

const meuElemento = document.querySelector("#produto-1");
meuElemento.classList.add('ativo');

// 3. Selecione o #caixa-mensagem e remova a classe escondido, 
// fazendo a mensagem aparecer.

const caixa = document.querySelector("#caixa-mensagem");
caixa.classList.remove('escondido');

// 4. Selecione o #produto-2 e use classList.toggle() para 
// alternar a classe ativo.

const meuElemento2 = document.querySelector("#produto-2");
meuElemento2.classList.toggle('ativo');

 
// Bloco 2 — Eventos com click
 

// 5. No botão #btn-tema, adicione um evento de click que 
// faça classList.toggle('ativo') no <body> (defina no CSS, 
// se quiser, como fica o "modo escuro").

const button = document.getElementById("btn-tema");
const body = document.querySelector("body");
button.addEventListener("click", () => {
    body.classList.toggle('ativo');
});


// 6. No #btn-favoritar-1, adicione um evento de click que 
// adicione a classe destaque ao #produto-1. Repita a ideia 
// no #btn-favoritar-2, aplicando a classe destaque ao #produto-2.

// PRODUTO 1

const favoritar1 = document.getElementById("btn-favoritar-1");
const produto1 = document.getElementById("produto-1");
favoritar1.addEventListener("click", function() {
    produto1.classList.add("destaque");
});

// PRODUTO 2

const favoritar2 = document.getElementById("btn-favoritar-2");
const produto2 = document.getElementById("produto-2");
favoritar2.addEventListener("click", function() {
    produto2.classList.add("destaque");
});


// 7. No #produto-1, adicione um evento de click que mostre no 
// console o texto do <h2> desse produto.

const produtO = document.querySelector("#produto-1");
produtO.addEventListener("click", function () {
    console.log(produtO.querySelector("h2").textContent);
});

 
// Bloco 3 — Eventos novos 
// Para os exercícios abaixo, pesquisem no MDN ou Google qual 
// evento do JavaScript resolve cada situação, antes de programar.

 
// 8. Quando o mouse passar por cima (sem clicar) do #imagem-produto, 
// adicione a classe destaque a ela. Quando o mouse sair de cima 
// da imagem, remova a classe.(Pesquisar: eventos de mouse além de click.)

const imagem = document.querySelector("#imagem-produto");
imagem.addEventListener("mouseenter", () => {
    imagem.classList.add("destaque");
});

imagem.addEventListener("mouseleave", () => {
    imagem.classList.remove("destaque");
});


// 9. No campo #campo-busca, faça com que, a cada letra digitada, 
// o texto do #resultado-busca seja atualizado mostrando o que 
// foi digitado (ex: Você digitou: abc). (Pesquisar: evento que 
// dispara a cada mudança no valor de um input, em tempo real.)

const meuInput = document.querySelector("#campo-busca");
const resultado = document.querySelector("#resultado-busca");
meuInput.addEventListener("input", (evento) => {
    resultado.textContent = "Você digitou: " + evento.target.value;
});

// 10. No #form-contato, impeça o comportamento padrão do formulário 
// (que recarrega a página) e, em vez disso, mostre no #feedback-form 
// a mensagem "E-mail enviado!" com a classe sucesso. (Pesquisar: evento 
// de formulário + como impedir o comportamento padrão do navegador.)

const formulario = document.getElementById("form-contato");
const feedback = document.getElementById("feedback-form");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    feedback.textContent = "E-mail enviado!";
    feedback.classList.add("sucesso");
});

// 11. No #campo-email, adicione um evento que, quando o campo 
// perder o foco (o usuário clicar fora dele), verifique se o campo 
// está vazio — se estiver, mostre no #feedback-form a mensagem 
// "Preencha o e-mail" com a classe erro. (Pesquisar: evento de 
// perda de foco.)

const campo = document.querySelector("#campo-email");
const feedBack = document.querySelector("#feedback-form");
campo.addEventListener("blur", (evento) => {
    if (campo.value === "") {
        feedBack.textContent = "Preencha o e-mail";
        feedBack.classList.add("erro");
    }
});

// 12. Desafio: no #campo-busca, adicione um evento que detecte 
// quando o usuário aperta a tecla Enter e, quando isso acontecer, 
// mostre no console a mensagem "Busca confirmada!". (Pesquisar: evento 
// de teclado e como identificar qual tecla foi pressionada.)

const busca = document.querySelector("#campo-busca");
busca.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Busca confirmada!");
    }
});

 
// Bloco 4 — Para pensar (sem código)
 

// 13. Repare que nos exercícios 8 a 12 vocês usaram eventos 
// diferentes de click para cada situação (mouse, digitação, 
// formulário, foco, teclado). Na opinião de vocês, por que faz 
// sentido existirem eventos diferentes em vez de um só evento 
// genérico para "algo aconteceu"?

// RESPOSTA 13. Acredito que o principal motivo seja que cada 
// situação possui um evento específico. Isso torna o código 
// mais correto, organizado e fácil de entender, pois cada evento 
// pode ter sua própria função e ação de acordo com o que aconteceu.