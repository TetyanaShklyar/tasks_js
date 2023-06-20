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

// console.log(standardizeStrings(favoriteCities))

const someString = 'This is some strange string'

function reverse(str) {
  if (typeof str !== 'string') {
    return 'Ошибка!'
  }
  let arrStr = str.split('').reverse().join('')

  return arrStr

  // Решение при помощи цикла
  // let newStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  // }
  // return newStr
}

console.log(reverse(someString)) // gnirts egnarts emos si sihT
