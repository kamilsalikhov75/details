import fs from 'fs';


export async function getGenres() {

    // let genresJSON = new File("genres.json");
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU5ZTBiOTAzNWQyMWUyYTkxZWM3MTZhM2ZiY2JiMCIsInN1YiI6IjY1MjkxNTQ3NjI5YjJjMDExYzkwM2U0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEnWmaoN9WiecvlJsoL6kIa9rFt5EpL8CCsS4VwoD4o'
        }
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => fs.writeFileSync('genres.json', response, 'utf-8'))
        .catch(err => console.error(err));
}

