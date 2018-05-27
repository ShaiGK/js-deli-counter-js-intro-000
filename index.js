function takeANumber (deliLine,custName) {
  deliLine.push (custName)
  return `Welcome, ${custName}. You are number ${deliLine.indexOf[custName]++} in line.`
}