let isEditMode = false
let editingId = 0

const newPostModalTrigger = document.getElementById('newPostModalTrigger')
const newPostModal = document.getElementById('newPostModal')
const mainElement = document.querySelector('main')
const postForm = document.getElementById('postForm')
const inputTitle = document.getElementById('title')
const inputContent = document.getElementById('content')

if (newPostModalTrigger) {
  newPostModalTrigger.addEventListener('click', () => {
    postForm.reset()

    postForm.action = `/create`
    newPostModal.querySelector('h2').textContent = 'Postingan Baru'
    newPostModal.querySelector('button[type="submit"]').textContent = 'Posting'

    newPostModal.showModal()
  })
}

mainElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-btn')) {
    editingId = event.target.dataset.editingId
    const title = event.target.dataset.title
    const content = event.target.dataset.content

    inputTitle.value = title
    inputContent.value = content

    postForm.action = `/update/${editingId}?_method=PATCH`
    newPostModal.querySelector('h2').textContent = 'Edit Postingan'
    newPostModal.querySelector('button[type="submit"]').textContent = 'Simpan'

    newPostModal.showModal()
  }
})
