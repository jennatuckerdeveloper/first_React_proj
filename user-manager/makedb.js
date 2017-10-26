const faker = require('faker')
const md5 = require('blueimp-md5')
const fetch = require('node-fetch')

// To add:
// fetch('https://jsadvancedclassproj1.firebaseio.com/user.json', {method: 'DELETE'})
// then put the call of the functions in a .then

// Or much better:
// make it an async function and await this first line 

for (let i = 0; i < 101; i++) {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const randomEmail = faker.internet.email()
  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.country()
  const zip = faker.address.zipCode()
  const country = faker.address.country()
  const password = faker.internet.password()
  const hashPassword = md5(password)

  console.log(firstName, lastName, randomEmail, streetAddress, city, state, zip, country)
  console.log(hashPassword)

  const bodyObject = {
    firstName,
    lastName,
    randomEmail,
    streetAddress,
    city,
    state,
    zip,
    country,
    password,
    hashPassword
  }

  var myInit = {
    method: 'POST',
    body: JSON.stringify(bodyObject)
  }
  // POST GET PATCH 

  fetch('https://jsadvancedclassproj1.firebaseio.com/user.json', myInit)
    .then((response) => { return response.json() })
    .then(output => console.log(output))
    // Both return Promises 
    // We do these two then's just to see that our API POST worked.  
}

// npm package that creates avatars
// avatar-generator npm, add avatar
