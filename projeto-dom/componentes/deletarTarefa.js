const BotaoDeletar = () => {
  const botaoDeletar = document.createElement('button')

  botaoDeletar.classList.add('delete-button')
  botaoDeletar.innerText = 'deletar'
  botaoDeletar.addEventListener('click', deletarTarefa)

  return botaoDeletar
}

const deletarTarefa = (evento) => {
  const botaoDeletar = evento.target
  const tarefaCompleta = botaoDeletar.parentElement
  tarefaCompleta.remove()

  return botaoDeletar

}

export default BotaoDeletar