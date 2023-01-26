const db = require("../models");
const Livre = db.livres;

// Create and Save a new Book
exports.create = (req, res) => {
  // Create a Livre
  const livre = new Livre({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
  });

  livre
    .save(livre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the book."
      });
    });
};

// find all Books
exports.findAll = (req, res) => {
  //const title = req.query.title;
  //var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Livre.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Books."
      });
    });
};

// FindBy id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Livre.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found book with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving the book with id=" + id });
    });
};

// Update by id 
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Livre.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update book with id=${id}. Maybe book was not found!`
        });
      } else res.send({ message: "book was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete by id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Livre.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete book with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Book was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete book with id=" + id
      });
    });
};

// Delete all 
exports.deleteAll = (req, res) => {
  Livre.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} books were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all books."
      });
    });
};
