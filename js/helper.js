exports.convert = (result) => {
  const arr = []
  result.forEach((row) => {
    const obj = {}
    row.forEach((column) => {
      obj[column.metadata.colName] = column.value
    })
    arr.push(obj)
  })
  return arr
}