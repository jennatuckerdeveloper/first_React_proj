console.log('asyn.js working')

// function ApiCall () {
//     const randNum = Math.floor(Math.random() * 10) + 1
//     return {status: 200, body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`}
// }

function JsonParser (response) {
  if (response.status !== 200) {
    throw new Error('invalid response-code')
  }
  return JSON.parse(response.body)
}

function getTheValue (serverResponseObject) {
  return serverResponseObject.data[0].attributes.value
}

// const value1 = getTheValue(JsonParser(ApiCall()))
// const value2 = getTheValue(JsonParser(ApiCall()))
// console.log("Syn example", value1 + value2)

const FAILURE_RATE = 0.5

function maybeFail () {
  if (Math.random() < FAILURE_RATE) {
    throw new Error('API response failed')
  }
}

function ApiCallT (callback, err) {
  setTimeout(() => {
    try {
      maybeFail()
      const randNum = Math.floor(Math.random() * 20) + 1
      callback({
        status: 200,
        body: `{"data":[{"id": 1, "type": "random", "attributes": { "value": ${randNum} }}]}`
      })
    } catch (e) {
      err('error was raised')
    }
  }, 1000)
}

ApiCallT((response) => {
  const parsedData1 = JsonParser(response)
  const randNum1 = getTheValue(parsedData1)
  ApiCallT((response) => {
    const parsedData2 = JsonParser(response)
    const randNum2 = getTheValue(parsedData2)
    console.log('asyn example', randNum1 + randNum2)
  }, function (errorString2) { console.log('inner', errorString2) })
}, function (errorString) { console.log('outer', errorString) })
