/*
const mongoose = require("mongoose");
const Commande = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    livres: {
        type: [String],
    }
  },
  { timestamps: true }
);


  module.exports = Commande;
  */

/*
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        title: String,
        price: String,
        livres: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "livre"
          }
        ]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
  const Commande = mongoose.model("commande", schema);
  return Commande;
  };
*/  
  
const mongoose = require("mongoose");

const Commande = mongoose.model(
  "Commande",
  new mongoose.Schema({
    title: String,
    price: String,
    livres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Livre"
      }
    ]
  })
);

module.exports = Commande;
