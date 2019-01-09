const db = require('../js/db')

exports.all = function (req, res) {
  db.execute('SELECT * FROM Matter')
  .then((result) => {
    res.send(result) 
  })
}

exports.delete = function (req, res) {
  db.execute(`DELETE FROM Matter WHERE Id = ${req.params.id}`)
  .then((result) => {
    res.send(result)
  })
}

exports.add = function (req, res) {
  db.execute(`INSERT INTO Matter (Name) VALUES ('${req.params.name}')`)
  .then((result) => {
    res.send(result) 
  })
}