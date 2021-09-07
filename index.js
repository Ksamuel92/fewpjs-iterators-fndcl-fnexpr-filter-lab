// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  const lowerCaseName = name.toLowerCase()
  return drivers.filter(driver => driver.toLowerCase() === lowerCaseName)
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName(drivers, testString) {
  return drivers.filter(driver => driver["name"].toLowerCase() === testString.toLowerCase())
}