const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
      personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
      }
  },
  rememberMyMovies: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('low');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('classic');
    } else if (personalMovieDB.count >= 30) {
      console.log('dumbass');
    } else {
      console.log('ERROR');
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Your favourite genre ${i}`);
      // if (genre === '' || genre === null) {
      //   console.log('Incorrect/missing data');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genres = prompt('Enter favorite genres with ","');
      if (genres === '' || genres === null) {
        console.log('Incorrect/missing data');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favourite genre ${i + 1} - ${item}`);
    });
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
};