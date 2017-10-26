
// How would you interface with this async function to get the whole sentence?
/* eslint-disable standard/no-callback-literal */
console.log('async_recur working')

const getSentenceFragment = (offset, callback) => {
  const pageSize = 3
  const sentence = [...'hello world']
  setTimeout(() => callback({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset +
          pageSize < sentence.length ? offset + pageSize : undefined
  }), 500)
}

let thing = getSentenceFragment(0, function (obj) { return obj })
console.log(thing)

const getSentence = (offset, callback) => {
  getSentenceFragment(offset, (obj) => {
    // console.log('obj', obj)
    if (obj.nextPage) {
      getSentence(obj.nextPage, (nextFragment) => {
        // console.log('nf', nextFragment)
        callback(obj.data.concat(nextFragment))
      })
    } else {
      callback(obj.data)
    }
  })
}
// console.log('Second answer below:')
// console.log(getSentence(0, (sentence) => console.log(sentence)))
