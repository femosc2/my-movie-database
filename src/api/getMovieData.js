const getMovieData = (movieTitle) => {
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;

    const movieData = fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the movie data here
            const resData = JSON.stringify(data);
            console.log(resData);
            return resData;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });

    return movieData;
}

export default getMovieData;
