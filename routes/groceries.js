const db = require('../js/db')

exports.all = function (req, res) {
  db.execute('SELECT * FROM Grocery')
  .then((result) => {
    res.send(result) 
  })
}

exports.delete = function (req, res) {
  db.execute(`DELETE FROM Grocery WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result)
  })
}

exports.add = function (req, res) {
  db.execute(`INSERT INTO Grocery (Name) VALUES ('${req.params.name}')`)
  .then((result) => {
    res.send(result) 
  })
}