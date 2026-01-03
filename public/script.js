const newPostModalTrigger = document.getElementById('newPostModalTrigger')
const newPostModal = document.getElementById('newPostModal')

newPostModal.showModal()

newPostModalTrigger.addEventListener('click', () => {
  newPostModal.showModal()
})
