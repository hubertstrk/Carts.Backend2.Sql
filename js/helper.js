exports.convert = (result) => {
  var arr = []
  result.forEach((row) => {
    var obj = {}
    row.forEach((column) => {
      obj[column.metadata.colName] = column.value
    })
    arr.push(obj)
  })
  return arr
}