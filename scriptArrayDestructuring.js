const family = ['Peter', 'Ann', 'Alex', 'Linda']

function showFamily(arr) {
  let str = ''

  arr.length === 0 ? (str = 'Семья пуста') : (str = 'Семья состоит из: ')

  arr.forEach((element) => {
    str += `${element} `
  })

  return str
}

// console.log(showFamily(family))

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']

function standardizeStrings(arr) {
  arr.forEach((element) => {
    console.log(element.toLowerCase())
  })
}

console.log(standardizeStrings(favoriteCities))
