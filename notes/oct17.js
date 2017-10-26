console.log('Oct 17 working')

let lone_sum = function (...nums) {
  let new_array = nums.filter(function (num, index, array) {
    let one = array.slice(0, index)
    let two = array.slice(index + 1)
    let three = one.concat(two)
    return !three.includes(num)
  })
  return new_array.reduce(function (sum, value) { return sum + value }, 0)
}

let lone_sum1 = function (...nums) {
  let new_array = nums.filter(function (num, index, array) { return !array.slice(0, index).concat(array.slice(index + 1)).includes(num) })
  return new_array.reduce(function (sum, value) { return sum + value }, 0)
}

let lone_sum2 = function (...nums) {
  return nums.filter(function (num, index, array) { return !array.slice(0, index).concat(array.slice(index + 1)).includes(num) }).reduce(function (sum, value) { return sum + value }, 0)
}

const lone_sumN = (a, b, c) => [a, b, c].filter((v, i, list) => list.filter((num) => num === v).length === 1).reduce((total, v) => total + v, 0)

// console.log(lone_sum(1,2,3))
// console.log(lone_sum(3, 2, 3))
// console.log(lone_sum(3, 3, 3))

// console.log(lone_sum1(3,2,3))
// console.log(lone_sum2(3,2,3))

/*
Given 3 int values, a b c, return their sum. 
However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. 
So for example, if b is 13, then both b and c do not count.

lucky_sum(1, 2, 3) → 6
lucky_sum(1, 2, 13) → 3
lucky_sum(1, 13, 3) → 1
*/

let lucky_sum = function (...vals) {
  if (vals.includes(13)) {
    let stop = vals.indexOf(13)
    return vals.slice(0, stop).reduce(function (total, sum) { return total + sum })
  } else {
    return vals.reduce(function (total, sum) { return total + sum })
  }
}
console.log(lucky_sum(1, 2, 3))
console.log(lucky_sum(1, 2, 13))
console.log(lucky_sum(1, 13, 3))

const luckySumN = (...list) => list
  .filter((v, i) => list.slice(0, i + 1).indexOf(13) < 0)
  .reduce((total, v) => total + v)
