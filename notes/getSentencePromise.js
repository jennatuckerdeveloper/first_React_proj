/* eslint-disable standard/no-callback-literal */

const getSentenceFragment = (offset) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const pageSize = 3
        const sentence = [...'hello world']
        resolve({
          data: sentence.slice(offset, offset + pageSize),
          nextPage: offset +
                pageSize < sentence.length ? offset + pageSize : undefined
        })
      } catch (e) {
        reject(new Error('Failure'))
      }
    }, 500)
  })
}

let answer = []

getSentenceFragment(0)
  .then((response) => { answer = answer.concat(response.data); return getSentenceFragment(response.nextPage) })
  .then((response2) => { answer = answer.concat(response2.data); return getSentenceFragment(response2.nextPage) })
  .then((response3) => { answer = answer.concat(response3.data); return getSentenceFragment(response3.nextPage) })
  .then((response4) => { answer = answer.concat(response4.data); console.log(answer) })
  .catch((errorString) => { console.log(errorString) })

Promise.all([getSentenceFragment(0), getSentenceFragment(3), getSentenceFragment(6), getSentenceFragment(9)])
  .then(([...responses]) => {
    const output = responses.reduce((final, response) => {
      const fragment = response.data
      return final.concat(fragment)
    }, [])
    console.log(output)
  })
  .catch(err => {
    console.log('look what happened', err)
  })

const getSentence = async function (sentence, offset) {
  let currentFragment = await getSentenceFragment(offset)
  while (currentFragment.nextPage) {
    sentence = sentence.concat(currentFragment.data)
    offset = currentFragment.nextPage
    currentFragment = await getSentenceFragment(offset)
  }
  console.log(sentence.concat(currentFragment.data))
}
getSentence([], 0)
