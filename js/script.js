const numberOfFilms = +prompt('How many movies have you watched?', '0');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const recentlyWatchedMovie = prompt('What movie have you watched recently?', 'LOTR: the fellowship of the ring'),
      rateRecentlyWatchedMovie = +prompt('How would your rate the movie?', '0');

personalMovieDB.movies[recentlyWatchedMovie] = rateRecentlyWatchedMovie;

console.log(personalMovieDB);