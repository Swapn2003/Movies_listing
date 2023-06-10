// Get a reference to the movie container element
const movieContainer = document.getElementById('movie-container');
let movies_list=[];

// // Fetch popular movie data from the API
// fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=02014e040498cf6510307be3ed6de78e')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch request
//         console.error('Error:', error);
//     });
// // Process the fetched movie data
//         const movies = data.results;
//         movies.forEach(movie => {
//             // Create a movie card element
//             const movieCard = document.createElement('div');
//             movieCard.className = 'movie-card';

//             // Create an image element for the movie poster
//             const moviePoster = document.createElement('img');
//             moviePoster.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
//             moviePoster.alt = movie.title;

//             // Append the movie poster to the movie card
//             movieCard.appendChild(moviePoster);

//             // Append the movie card to the movie container
//             movieContainer.appendChild(movieCard);
//         });
const searchInput = document.querySelector('[data-search]');
console.log(searchInput);
searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase();
    movies_list.forEach(movie=>{
        const isVisible=movie.movie_title.toLowerCase().includes(value);
        movie.element.classList.toggle("hide",!isVisible);
        console.log(isVisible);
    })
    // console.log(movies_list);
})

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjNjYmU5NjQxZmVhYTQyYjNkMjVmMzcxYzM4YjFjNiIsInN1YiI6IjY0ODMyZTQxOTkyNTljMDBhY2NiZjk5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lf3f_TtmDWkd2U_5eCRfCJxvjhnsXchq_qvg_-zHj_Y'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(res => res.json())
    .then(data =>{
        // Process the fetched movie data
        const movies = data.results;
        movies_list=movies.map(movie => {
            // Create a movie card element
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';

            // Create an image element for the movie poster
            const moviePoster = document.createElement('img');
            moviePoster.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
            moviePoster.alt = movie.title;

            // Append the movie poster to the movie card
            movieCard.appendChild(moviePoster);

            // Append the movie card to the movie container
            movieContainer.appendChild(movieCard);
            return {
                movie_title: movie.title,
                element:movieCard,
            }
        });
    })
    .catch(err => console.error(err));