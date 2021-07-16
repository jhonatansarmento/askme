import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {

  event.preventDefault()

  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = check ? 'Marcar como lida essa pergunta' : 'Excluir essa pergunta'
  modalDescription.innerHTML = check ? 'Marcar como Lida essa pergunta?' : 'tem certeza que deseja excluir essa pergunta?'
  modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}