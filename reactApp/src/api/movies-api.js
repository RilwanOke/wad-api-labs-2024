export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=34d827c8cbac0a8530dccb55b43f7d4c&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };