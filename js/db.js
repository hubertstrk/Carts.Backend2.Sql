const Request = require('tedious').Request
const Connection = require('tedious').Connection
const helper = require('./helper')
const sensitive = require('../sensitive')

const config = {
  userName: sensitive.username,
  password: sensitive.password,
  server: sensitive.server,
  options: {
    database: sensitive.database,
    encrypt: true,
    rowCollectionOnDone: true,
    rowCollectionOnRequestCompletion: true
  }
};

exports.execute = function (query) {

  console.info(query)
  return new Promise(function(resolve, reject) {
    const connection = new Connection(config)
    connection.on('connect', function (err) {
      if (err) {
        reject(err)
      } else {
        const request = new Request(query, 
          function (err, rowCount, rows) {
            if (err) {
              resolve(err)
            } else {
              resolve (helper.convert(rows))
            }
          }
        )
        // request.on('row', displayResult)
        connection.execSql(request)
      }
    })
  })
}

const displayResult = (columns) => {
  columns.forEach(function (column) {
    console.log("%s\t%s", column.metadata.colName, column.value);
  });
}
 