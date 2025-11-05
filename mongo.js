const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB:");
        console.log(err);
    });
// {review: "A bike messenger gets involved with a group of parkour artists while trying to save his brother from a drug dealer."
//     title: "Tracers",
//         year: 2015,
//             score: 6.2,
//                 rating: "PG-13",
//     }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const tracer = new Movie({ title: "Tracers", year: 2015, score: 6.2, rating: "R" });

Movie.insertMany([
    { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
    { title: "Alien", year: 1979, score: 8.1, rating: "R" },
    { title: "The Iron Giant", year: 1995, score: 7.5, rating: "R" },
    { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
    { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" }
])

    .then(data => {
        console.log("IT WORKED")
        console.log(data);
    })