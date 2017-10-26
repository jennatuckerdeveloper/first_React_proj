console.log('asynPromises working')

// change this into a version of an API that returns a Promise and chain two Promises at the bottom 

const FAILURE_RATE = 0.5

function maybeFail () {
  if (Math.random() < FAILURE_RATE) {
    throw new Error('API response failed')
  }
}

function ApiCall () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail()
        const randNum = Math.floor(Math.random() * 20) + 1
        resolve({
          status: 200,
          body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`
        })
      } catch (e) {
        reject(new Error('error was raised'))
      }
    }, 1000)
  })
}

function JsonParser (response) {
  if (response.status !== 200) {
    throw new Error('invalid response-code')
  }
  return JSON.parse(response.body)
}

function getTheValue (serverResponseObject) {
  return serverResponseObject.data[0].attributes.value
}

ApiCall()
  .then((response) => {
    const parsedData1 = JsonParser(response)
    const randNum1 = getTheValue(parsedData1)
    ApiCall()
      .then((response2) => {
        const parsedData2 = JsonParser(response)
        const randNum2 = getTheValue(parsedData2)
        console.log('asyn example', randNum1 + randNum2)
      })
      .catch((err2) => {
        console.log('look what happened inner', err2)
      })
  })
  .catch((err) => {
    console.log('look what happened', err)
  })
