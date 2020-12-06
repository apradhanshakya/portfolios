

const $movieForm = document.getElementById('movie-form');
const $btnSearchMovie = document.getElementById('btn-search-movie');
const $movieList = document.querySelector('.list');

const movies = [];

const renderMovies = (movieToFilter = '') => {
    let moviesToRender = !movieToFilter ? movies :  movies.filter(movie=>movie?.info?.title.includes(movieToFilter));
     console.log(moviesToRender);

    if(movies.length === 0) {
        $movieList.classList.remove('visible');
        return;
    } else {
        $movieList.classList.add('visible');
    }
    
    const list = document.querySelector('.list');
    list.innerHTML = '';

    moviesToRender.forEach(movie=>{
        const liEl = document.createElement('li');
        liEl.classList.add('list__item');
        const div = document.createElement('div');
        
        let liTitle = `${movie.info.title}`;
        for(const key in movie.info) {
            if(key!=='title') {
                const liExtraInfoName = `${key}`;
                const liExtraInfoValue = `${movie.info[key]}`;
                liTitle += ": " + liExtraInfoName + "-" + liExtraInfoValue;
            }
        }
        liEl.textContent = liTitle;
        liEl.appendChild(div);
        list.appendChild(liEl);

    });
    

}

const addMovieHandler = (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const extraNameEl = document.getElementById('extra-name');
    const extraValueEl = document.getElementById('extra-value');

    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' ||
       extraName.trim() === '' ||
       extraValue.trim() === ''
    ) {
        alert("Please enter valid values ");
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    }

    movies.push(newMovie);
    renderMovies();
    
    titleEl.value='';
    extraNameEl.value='';
    extraValueEl.value='';
   
};

const searchMovieHandler = () => {
    const searchInput = document.getElementById('search-input').value;
    renderMovies(searchInput);
}

const loadEventListeners = () => {
    $movieForm.addEventListener('submit', addMovieHandler);
    $btnSearchMovie.addEventListener('click',searchMovieHandler);
}

loadEventListeners();

