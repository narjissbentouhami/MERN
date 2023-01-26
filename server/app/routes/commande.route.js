module.exports = app => {
    const commandes = require("../controllers/commande.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", commandes.create);
  
    router.get("/", commandes.findAll);
  
    router.get("/:id", commandes.findOne);
  
    router.delete("/:id", commandes.delete);
  
    router.delete("/", commandes.deleteAll);
  
    app.use("/api/commande", router);
  };
  