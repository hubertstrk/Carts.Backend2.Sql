'use strict'

var Request = require('tedious').Request
var Connection = require('tedious').Connection
var helper = require('./helper')
var sensitive = require('../sensitive')

var config = {
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
    var connection = new Connection(config)
    connection.on('connect', function (err) {
      if (err) {
        reject(err)
      } else {
        var request = new Request(query, 
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

var displayResult = (columns) => {
  columns.forEach(function (column) {
    console.log("%s\t%s", column.metadata.colName, column.value);
  });
}
 