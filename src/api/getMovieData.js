const getMovieData = (movieTitle) => {
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

    const movieData = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.Search);
            return data.Search;
        })
        .catch(error => {
            console.error(error);
        });

    return movieData;
}

export default getMovieData;
