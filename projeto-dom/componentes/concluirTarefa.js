const BotaoConcluir = () => {
  const botaoConcluir = document.createElement('button')

  botaoConcluir.classList.add('check-button')
  botaoConcluir.innerText = 'concluir'
  botaoConcluir.addEventListener('click', concluirTarefa)

  return botaoConcluir
}

const concluirTarefa = (evento) => {
  const botaoConcluir = evento.target //capturamos qual elemento foi clicado

  const tarefaCompleta = botaoConcluir.parentElement //acessamos o pai do elemento

  tarefaCompleta.classList.toggle('done') // método toggle adiciona a classe done ao pai (que é o li) quando clicarmos no botão
}

export default BotaoConcluir