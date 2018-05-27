function takeANumber (deliLine,custName) {
  deliLine.push (custName)
  return `Welcome, ${custName}. You are number ${deliLine.indexOf(custName) + 1} in line.`
}

function nowServing (array) {
  var arr = []
  arr.push(array[0])
  array.shift()
  return `Currently serving ${arr}.`
}