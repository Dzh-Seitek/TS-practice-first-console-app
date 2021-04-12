const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const recentlyWatchedMovie = prompt('What movie have you watched recently?', ''),
        rateRecentlyWatchedMovie = +prompt('How would your rate the movie?', '');

  if (recentlyWatchedMovie != null && rateRecentlyWatchedMovie != null && recentlyWatchedMovie != '' && rateRecentlyWatchedMovie != '' && recentlyWatchedMovie.length < 50) {
    personalMovieDB.movies[recentlyWatchedMovie] = rateRecentlyWatchedMovie;
    console.log('DONE');
  } else {
    i--;
    console.log('ERROR');
  }
}

if (personalMovieDB.count < 10) {
  console.log('low');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('classic');
} else if (personalMovieDB.count > 30) {
  console.log('dumbass');
} else {
  console.log('ERROR');
}

console.log(personalMovieDB);
