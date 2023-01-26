const db = require("../models");
const Commande = db.commandes;

// Create and Save a new Commande
exports.create = (req, res) => {
  // Create a Livre
  const commande = new Commande({
    title: req.body.title,
    price: req.body.price,
    livres: req.body.livres,
  });

  commande
    .save(Commande)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the commande."
      });
    });
};

// find all commandes
exports.findAll = (req, res) => {
    Commande.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving commandes."
      });
    });
};

// FindBy ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Commande.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found commande with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving the commande with id=" + id });
    });
};

// Delete by id 
exports.delete = (req, res) => {
  const id = req.params.id;

  Commande.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete commande with id=${id}. Maybe commande was not found!`
        });
      } else {
        res.send({
          message: "Commande was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete commande with id=" + id
      });
    });
};

// Delete all 
exports.deleteAll = (req, res) => {
  Commande.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} commandes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all commandes."
      });
    });
};
