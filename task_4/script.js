'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastSeenMovie = prompt('Один из последних просмотренных фильмов?'),
            rate = prompt('На сколько оцените его?');
            if (lastSeenMovie !== '' && rate !== '' && lastSeenMovie !== null && rate !== null && lastSeenMovie.length < 50) {
                this.movies[lastSeenMovie] = rate;
            } else {
                console.log('Произошла ошибка');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre !== '' && genre !== null) {
                this.genres[i] = genre;
            } else {
                console.log('Вы ввели некорректные данные');
                i--;
            } 
        }
        this.genres.forEach((item, index) => 
            console.log(`Любимый жанр под номером ${index + 1} - это ${item}`));
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
};
