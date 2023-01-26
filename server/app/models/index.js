const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.livres = require("./livre")(mongoose);
db.genre = require("./genre");
db.commande = require("./commande");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;