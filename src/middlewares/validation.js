const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;

  const errors = [];
  if (!title) errors.push({ field: "title", message: "Title is required" });
  if (!director) errors.push({ field: "director", message: "Director is required" });
  if (!year) errors.push({ field: "year", message: "Year is required" });
  if (!color) errors.push({ field: "color", message: "Color is required" });
  if (!duration) errors.push({ field: "duration", message: "Duration is required" });

  if (errors.length) {
    res.status(422).json({ errors });
  } else {
    next(); // Si aucune erreur, passe au prochain middleware ou à la route handler
  }
};

const validateUser = (req, res, next) => {
  const { name, city, language } = req.body;

  const errors = [];
  if (!name) errors.push({ field: "name", message: "Name is required" });
  if (!city) errors.push({ field: "city", message: "City is required" });
  if (!language) errors.push({ field: "language", message: "Language is required" });

  if (errors.length) {
    res.status(422).json({ errors });
  } else {
    next();
  }
};


module.exports = {
  validateMovie,
  validateUser,
};
