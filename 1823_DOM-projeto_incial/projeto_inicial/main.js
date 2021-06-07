import BotaoConclui from "./componentes/concluirTarefa.js"  
import BotaoDeleta from "./componentes/deletarTarefa.js"  
  
const criarTarefa = (evento) => {

  evento.preventDefault(); //previne que a definição padrão do evento seja executada
  
  const input = document.querySelector('[data-form-input]'); //pega o input do formulario

  const valor = input.value;                                 //captura o valor do input

  const lista = document.querySelector('[data-list]'); //selecionei a lista
  const tarefa = document.createElement('li')          //criando a li dentro da lista
  tarefa.classList.add('task');                        //adicionando uma classe a tarefa
  const conteudo = `<p class="content">${valor}</p>`; //indicando como que eu quero que seja o paragrafo

  tarefa.innerHTML = conteudo //adicionando o conteudo dentro da tarefa no html

  lista.appendChild(tarefa); // adicionando dentro da lista um filho
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  input.value = " "
  }

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);  //adiciona um escutador ao botão, que quando clickado executa a função descrita

