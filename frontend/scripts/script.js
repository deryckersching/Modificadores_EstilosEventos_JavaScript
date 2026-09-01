// Atividade Deryck Ersching Zezuino

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

 

 
// Bloco 2 — Eventos com click
 

// 5. No botão #btn-tema, adicione um evento de click que faça classList.toggle('ativo') 
// no <body> (defina no CSS, se quiser, como fica o "modo escuro").

// 6. No #btn-favoritar-1, adicione um evento de click que adicione a classe destaque 
// ao #produto-1. Repita a ideia no #btn-favoritar-2, aplicando a classe destaque ao #produto-2.

// 7. No #produto-1, adicione um evento de click que mostre no console o texto do <h2> desse produto.

 

 
// Bloco 3 — Eventos novos 
// Para os exercícios abaixo, pesquisem no MDN ou Google qual evento do JavaScript resolve cada situação, antes de programar.

 

// 8. Quando o mouse passar por cima (sem clicar) do #imagem-produto, adicione 
// a classe destaque a ela. Quando o mouse sair de cima da imagem, remova a classe. 
// (Pesquisar: eventos de mouse além de click.)

// 9. No campo #campo-busca, faça com que, a cada letra digitada, o texto do #resultado-busca 
// seja atualizado mostrando o que foi digitado (ex: Você digitou: abc). (Pesquisar: evento que dispara 
//     a cada mudança no valor de um input, em tempo real.)

// 10. No #form-contato, impeça o comportamento padrão do formulário (que recarrega a página) e, 
// em vez disso, mostre no #feedback-form a mensagem "E-mail enviado!" com a classe sucesso. 
// (Pesquisar: evento de formulário + como impedir o comportamento padrão do navegador.)

// 11. No #campo-email, adicione um evento que, quando o campo perder o foco (o usuário clicar fora dele), 
// verifique se o campo está vazio — se estiver, mostre no #feedback-form a mensagem "Preencha o e-mail" 
// com a classe erro. (Pesquisar: evento de perda de foco.)

// 12. Desafio: no #campo-busca, adicione um evento que detecte quando o usuário aperta a tecla Enter e, 
// quando isso acontecer, mostre no console a mensagem "Busca confirmada!". (Pesquisar: evento de teclado 
//     e como identificar qual tecla foi pressionada.)

 

 
// Bloco 4 — Para pensar (sem código)
 

// 13. Repare que nos exercícios 8 a 12 vocês usaram eventos diferentes de click 
// para cada situação (mouse, digitação, formulário, foco, teclado). Na opinião de vocês, 
// por que faz sentido existirem eventos diferentes em vez de um só evento genérico para "algo aconteceu"?