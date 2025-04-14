const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];


app.get('/api/users', (req, res) => {
  let filteredUsers = users;

  if (req.query.language) {
    const language = req.query.language;
    filteredUsers = filteredUsers.filter(user => user.language === language);
  }

  if (req.query.city) {
    const city = req.query.city;
    filteredUsers = filteredUsers.filter(user => user.city === city);
  }

  res.status(200).json(filteredUsers);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('Not Found');
  }
});


app.post("/api/movies", movieControllers.postMovie);

app.post("/api/users", movieControllers.createUser);


module.exports = app;
