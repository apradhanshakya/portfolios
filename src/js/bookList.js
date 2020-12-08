const btnAddBook = document.querySelector('header button');
const modal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const btnCancel = document.querySelector('.modal__actions .btn--passive');
const btnAdd = btnCancel.nextElementSibling;
const userInputs = modal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteBookModal = document.getElementById('delete-modal');

const books = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
      console.log('hello');
}
const cancelBookDeletion = () => {
    toggleBackdrop();
    deleteBookModal.classList.remove('visible');
}

const deleteBook = (bookId) => {
    let bookIndex = 0;
    for(const book of books) {
        if(book.id === bookId){
            break;
        }
        bookIndex++;
    }
    books.splice(bookIndex,1);
    const listRoot = document.getElementById('list');
    listRoot.removeChild(listRoot.children[bookIndex]);
    cancelBookDeletion();
}

const deleteBookHandler = (bookId) => {
    
    deleteBookModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton = deleteBookModal.querySelector('.btn--passive');
    const confirmDeletionButton = deleteBookModal.querySelector('.btn--success');

    cancelDeletionButton.addEventListener('click',cancelBookDeletion);
    confirmDeletionButton.addEventListener('click', deleteBook.bind(null, bookId));
}

const renderNewBookElement = (id, title, imageUrl, rating) => {
    const newBookElement = document.createElement('li');
    newBookElement.className = "book-element";
    newBookElement.innerHTML = `
        <div class="book-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="book-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newBookElement.addEventListener('click', deleteBookHandler.bind(null,id));
    const listRoot = document.getElementById('list');
    listRoot.appendChild(newBookElement);
}

const updateUI = () => {
    if(books.length === 0) {
        entryTextSection.style.display="block";
    } else {
        entryTextSection.style.display ="none";
    }
}

const clearBookInput = () => {
    for(const userInput of userInputs) {
        userInput.value = '';
    }
}

const closeModal = () => {
    modal.classList.remove('visible');
}

const showModal = () =>{
    const modal = document.querySelector('.modal');
    modal.classList.toggle('visible');
    toggleBackdrop();
}

const addBookHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==='' ||
       imageUrlValue.trim()==='' ||
       ratingValue.trim()==='' ||
       +ratingValue < 1 ||
       +ratingValue > 5

    ){
        alert('Please enter valid values. Pls note that rating should be between 1 and 5');
        return;
    }

    const newBook = {
        id: Math.random().toString(),
        title: titleValue,
        image: 'src/assets/img/img5.jpg',
        rating: ratingValue
    }

    const {id, title, image, rating} = newBook;

    books.push(newBook);
    closeModal();
    toggleBackdrop();
    clearBookInput();
    renderNewBookElement(id,title,image,rating);
    updateUI();
    
}

const cancelAddBookHandler = () => {
    closeModal();
    toggleBackdrop();
    clearBookInput();
}

const backdropClickHandler = () => {
    closeModal();
    clearBookInput();
    cancelBookDeletion();
}



btnAddBook.addEventListener('click', showModal);
btnCancel.addEventListener('click', cancelAddBookHandler);
backdrop.addEventListener('click', backdropClickHandler);
btnAdd.addEventListener('click', addBookHandler);