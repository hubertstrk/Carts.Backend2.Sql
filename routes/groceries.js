var db = require('../js/db');

exports.all = function (req, res) {
  db.execute('SELECT * FROM groceries')
  .then((result) => {
    res.send(result) 
  });
}

exports.delete = function (req, res) {
  db.execute(`DELETE FROM groceries WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result)
  });
}

exports.add = function (req, res) {
  db.execute(`INSERT INTO groceries (Name) VALUES ('${req.body.name}'); SELECT SCOPE_IDENTITY();`)
  .then((result) => {
    res.send(result) 
  });
}