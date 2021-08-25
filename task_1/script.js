const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let lastSeenMovie, rate;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (typeof numberOfFilms === 'number' && !isNaN(numberOfFilms)) {
    lastSeenMovie = prompt('Один из последних просмотренных фильмов?');
    rate = prompt('На сколько оцените его?');
    personalMovieDB.movies[lastSeenMovie] = rate;
    lastSeenMovie = prompt('Один из последних просмотренных фильмов?');
    rate = prompt('На сколько оцените его?');
    personalMovieDB.movies[lastSeenMovie] = rate;
    console.log(personalMovieDB);
} else {
    console.log('Необходимо указать число фильмов');
}
