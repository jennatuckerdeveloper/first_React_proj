console.log('recursion working')

// How would you call this function repeatedly to get the whole sentence?

const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

// My answers 

let simple = function (sentence) {
  if (sentence.length === 1) {
    return sentence[0]
  } else {
    return sentence[0] + simple(sentence.slice(1))
  }
}

// console.log(simple('hello world'))

const getSentence = (sentence, offset) => {
  let obj = getSentenceFragment(offset)
  let nextPage = obj.nextPage
  sentence.push(obj.data.join(''))
  // sentence = sentence.concat(obj.data)
  if (nextPage !== null) {
    getSentence(sentence, nextPage)
  }
  return sentence
}
// Why doesn't sentence.concat(obj.data) work?  
console.log('first answer', getSentence([], 0).join(''))
