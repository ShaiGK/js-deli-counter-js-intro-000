function takeANumber (deliLine,custName) {
  deliLine.push (custName)
  return `Welcome, ${custName}. You are number ${deliLine.indexOf(custName) + 1} in line.`
}

function nowServing (array) {
  if (!array.length) {
    return "There is no one waiting to be served!"
  }
  return `Currently serving ${array.shift()}.`
}
