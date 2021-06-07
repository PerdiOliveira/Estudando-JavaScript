const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');  //criando o botão dentro do html
  botaoConclui.classList.add("check-button"); //adicionando uma classe pro botão
  botaoConclui.innerText = "concluir"  //colocando um texto dentro do botão
  botaoConclui.addEventListener('click', concluirTarefa);
  
  return botaoConclui;
}

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaConcluida = botaoConclui.parentElement;

  tarefaConcluida.classList.toggle("done");

}

export default BotaoConclui