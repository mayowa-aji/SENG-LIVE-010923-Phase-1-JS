//BookStore has been moved to data.js
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}
function renderHeader(bookStore) {
  document.querySelector('h1').textContent = bookStore.name
}
renderHeader(bookStore)

function renderFooter(bookStore) {
  document.querySelector('#store').textContent = bookStore.location
  document.querySelector('#number').textContent = bookStore.number
  document.querySelector('#address').textContent = bookStore.address
}
renderFooter(bookStore)


function renderBook(book) {
  const li = document.createElement('li')
  li.className = 'list-li'

  const h3 = document.createElement('h3')
  li.append(h3)
  h3.textContent = book.title

  const pAuthor = document.createElement('p')
  li.append(pAuthor)
  pAuthor.textContent = book.author

  const pPrice = document.createElement('p')
  li.append(pPrice)
  pPrice.textContent = formatPrice(book.price)


  const img = document.createElement('img')
  li.append(img)
  img.src = book.imageUrl
  img.alt = `${book.title} cover`
  img.title = `${book.title} cover`


  const button = document.createElement('button')
  li.append(button)
  button.textContent = 'Delete'


  const ul = document.querySelector('#book-list')
  ul.append(li)

}
const book = renderBook(bookStore.inventory[0])
bookStore.inventory.forEach(book => { renderBook(book)})






