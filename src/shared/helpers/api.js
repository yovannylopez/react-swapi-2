export const getAllMovie = async () => {
  const res = await fetch('https://swapi.co/api/films');
  const resJson = await res.json();
  const editedMovieList = resJson.results.map(movie => ({
    id: parseFloat(movie.url.slice(27, 28)),
    title: movie.title,
    episode: movie.episode_id,
    director: movie.director,
    description: movie.opening_crawl
  }));
  return editedMovieList;
};

export const getSingleMovie = async id => {
  const res = await fetch(`https://swapi.co/api/films/${id}`);
  const resJson = await res.json();
  const resCharacters = resJson.characters.map(url =>
    fetch(url)
      .then(data => data.json())
      .then(c => c.name),
  );

  const characters = await Promise.all(resCharacters);

  const data = {
    characters,
    title: resJson.title,
    episode: resJson.episode_id,
    director: resJson.director,
    description: resJson.opening_crawl
  };
  return data;
};
