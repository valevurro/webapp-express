const express = require('express');
const app = express();
const PORT = 3000;
const movieRouter = require('./router/movies');
const connection = require('./database/connection');

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Welcome to the Movie Database!");
});

app.use("/movies", movieRouter);

module.exports = app;