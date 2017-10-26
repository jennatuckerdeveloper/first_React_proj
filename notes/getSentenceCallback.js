
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
// so what's being passed here is the object that's the parameter 
// a different offset would make a different object.
// a different callback would not necessarily do anything differnt, as in chb1

const cb1 = function (obj) {
  console.log('Return 1', obj)
}

// getSentenceFragment(0, cb1)

const getSentence = (offset, callback) => {
  getSentenceFragment(offset, (obj) => {
    if (obj.nextPage) {
      getSentence(obj.nextPage, (nextFragment) => { callback(obj.data.concat(nextFragment)) })
    } else {
      callback(obj.data)
    }
  })
}
// console.log('Second answer below:')
// getSentence(0, (sentence) => console.log(sentence))

const getSentenceCallbackHell = (offset, callback) => {
  getSentenceFragment(offset, (obj) => {
    let first3 = obj.data
    getSentenceFragment(obj.nextPage, (obj2) => {
      let first6 = first3.concat(obj2.data)
      getSentenceFragment(obj2.nextPage, (obj3) => {
        let first9 = first6.concat(obj3.data)
        getSentenceFragment(obj3.nextPage, (obj4) => {
          let first12 = first9.concat(obj4.data)
          callback(first12)
        })
      })
    })
  })
}

console.log('Below:')
getSentenceCallbackHell(0, (sent) => console.log(sent))
