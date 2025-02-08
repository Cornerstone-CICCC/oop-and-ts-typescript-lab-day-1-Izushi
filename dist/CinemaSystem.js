"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    // add 4 more
    MovieGenre[MovieGenre["Horror"] = 1] = "Horror";
    MovieGenre[MovieGenre["Comedy"] = 2] = "Comedy";
    MovieGenre[MovieGenre["Kids"] = 3] = "Kids";
    MovieGenre[MovieGenre["Drama"] = 4] = "Drama";
})(MovieGenre || (MovieGenre = {}));
var movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    var newMovie = {
        movieId: movieId,
        title: title,
        genre: genre,
        availableSeats: availableSeats
    };
    movies.push(newMovie);
    return movies;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    var selectedMovie = movies.find(function (movie) { return movie.movieId === movieId; });
    var seat = selectedMovie.availableSeats.find(function (availableSeat) { return availableSeat[0] === rowLetter && availableSeat[1] === seatNumber; });
    if (seat) {
        selectedMovie.availableSeats = selectedMovie.availableSeats.filter(function (availableSeat) { return availableSeat !== seat; });
        console.log(selectedMovie.availableSeats);
        return "Seat ".concat(rowLetter + seatNumber, " booked successfully");
    }
    else {
        return "Seat ".concat(rowLetter + seatNumber, " is not available");
    }
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var selectedMovie = movies.find(function (movie) { return movie.movieId === movieId; });
    var seat = selectedMovie.availableSeats.find(function (availableSeat) { return availableSeat[0] === rowLetter && availableSeat[1] === seatNumber; });
    return seat ? true : false;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
