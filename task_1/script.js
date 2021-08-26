'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let lastSeenMovie = prompt('Один из последних просмотренных фильмов?'),
    rate = prompt('На сколько оцените его?');
    if (lastSeenMovie !== '' && rate !== '' && lastSeenMovie !== null && rate !== null && lastSeenMovie.length < 50) {
        personalMovieDB.movies[lastSeenMovie] = rate;
    } else {
        console.log('Произошла ошибка');
        i--;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


/* Последний пункт переписать цикл двумя способами
Способ 1

let i = 0;
while (i < 2) {
    i++;
    let lastSeenMovie = prompt('Один из последних просмотренных фильмов?'),
        rate = prompt('На сколько оцените его?');
        if (lastSeenMovie !== '' && rate !== '' && lastSeenMovie !== null && rate !== null && lastSeenMovie.length < 50) {
            personalMovieDB.movies[lastSeenMovie] = rate;
        } else {
            console.log('Произошла ошибка');
            i--;
        }    
} */

/* Способ 2
let i = 0;
do {
    i++
    let lastSeenMovie = prompt('Один из последних просмотренных фильмов?'),
    rate = prompt('На сколько оцените его?');
    if (lastSeenMovie !== '' && rate !== '' && lastSeenMovie !== null && rate !== null && lastSeenMovie.length < 50) {
        personalMovieDB.movies[lastSeenMovie] = rate;
    } else {
        console.log('Произошла ошибка');
        i--;
    } 
} while (i < 2); */