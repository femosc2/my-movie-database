const getMovieData = (movieTitle) => {
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

    const movieData = fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the movie data here
            console.log(data);
            return data.Search;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });

    return movieData;
}

export default getMovieData;
