const Api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1ae6e66913866d5ad202afddb15f7473&page=1';

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=1ae6e66913866d5ad202afddb15f7473&query="';

const searchItem = document.getElementById('search');
const form = document.getElementById('form');
const main = document.getElementById('main');

getMovies(Api);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
     showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML="";
    
}

 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let search = searchItem.value;
    if(searchItem&& searchItem !== ''){
        getMovies(SEARCH_API+search);
        searchItem.value="";
 }else{
        window.location.reload();
 }
})




    
