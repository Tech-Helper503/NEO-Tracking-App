const { response } = require('express');
const express = require('express')
const app = express();
let response1 = undefined

app.post(`https://api.nasa.gov/neo/rest/v1/feed?start_date=?api_key=AgRoRIzMNpB6wHWYdETRDQ27ifYxpKAedaVv0aGK`, response => {
    response1 = response.json()
})

app.get('/t',(request,response) => {
    response.send(toString(response1))
})

app.listen(5000,() => console.log('Listening on port 5000'))
