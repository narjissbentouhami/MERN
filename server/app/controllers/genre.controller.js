const db = require("../models");
const Genre = db.genres;

// Create and Save a new Genre
exports.create = (req, res) => {
  // Create a Livre
  const genre = new Genre({
    title: req.body.title,
    livres: req.body.livres,
  });

  genre
    .save(Genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the genre."
      });
    });
};

// find all genres
exports.findAll = (req, res) => {
    Genre.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving genres."
      });
    });
};

// FindBy id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Genre.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found genre with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving the genre with id=" + id });
    });
};

// Delete by id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Genre.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete genre with id=${id}. Maybe Genre was not found!`
        });
      } else {
        res.send({
          message: "Genre was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete genre with id=" + id
      });
    });
};

// Delete all 
exports.deleteAll = (req, res) => {
  Genre.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} genres were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all genres."
      });
    });
};
