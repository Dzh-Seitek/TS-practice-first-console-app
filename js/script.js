let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies have you watched?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies have you watched?', '');
  }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyMovies() {
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
}
// rememberMyMovies();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('low');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('classic');
  } else if (personalMovieDB.count >= 30) {
    console.log('dumbass');
  } else {
    console.log('ERROR');
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favourite genre ${i}`);;
  }
}
writeYourGenres();
