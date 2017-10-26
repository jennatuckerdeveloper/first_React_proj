console.log('Day 5 working')

const countDuplicates = function (str) {
  let newString = str.toLowerCase()
  let dict = {}
  let toReturn = 0
  for (let letter in newString) {
    if (newString[letter] in dict) {
      dict[newString[letter]] = (dict[newString[letter]] + 1)
    } else {
      dict[newString[letter]] = 1
    }
  } for (let key in dict) {
    if (dict[key] > 1) {
      toReturn += 1
    }
  } return toReturn
}

console.log(countDuplicates('abcde'))
console.log(countDuplicates('aabbcde'))
console.log(countDuplicates('aabBcde'))

(function () {
  console.log(1)
  setTimeout(function () { console.log(2) }, 1000)
  setTimeout(function () { console.log(3) }, 0)
  console.log(4)
})()
// 1, 4, 3, 2

for (var i = 0; i < 5; i++) {
  setTimeout(function () { console.log(i) }, i * 1000)
}

for (var i = 0; i < 5; i++) {
  let print = i
  setTimeout(function () {
    console.log(print)
  }, i * 1000)
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () { console.log(i) }, i * 1000)
}
