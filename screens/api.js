
const API_KEY=`c7574fc15c96e736c53f5b26e766d765`
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      overview,
      
      
    }) => ({
      key: String(id),
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path), 
      description: overview,
      
     
    })
  );

  return movies;
};