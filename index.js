// import express
const express = require('express');
const app = express();
const PORT = 8080;

// middleware that converts data to JSON
app.use(express.json())

// listen on PORT
app.listen(
    PORT,
    // callback function logs URL to console
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

// GET request to /tshirt Endpoint 
// takes req & res as parameters
app.get('/tshirt', (req, res) => {
    // response status code 200 OK
    // send JSON to user
    res.status(200).send({
        tshirt: 'test tshirt',
        size: 'large'
    })
})

// POST request to /tshirt/:id
// :id - ROUTE PARAMS - capture dynamic values in the URL
app.post('/tshirt/:id', (req, res) => {

    
    // get id using request parameters 
    // destructure request parameters & find the id
    const { id } = req.params;
    // get logo from request body
    // destructure request body & find the logo key & display its value
    const { logo } = req.body;

    // if we can't find the logo... then 
    // response status 418 .send({ message: "error message" })
    if (!logo) {
       res.status(418).send({ message: "we need a logo!" }) 
    }
    // if we found the logo.. then
    // send({ key: value })
    res.send({
        tshirt: `Shirt with you ${logo} and ID of ${id}`,
    });  
    // you can use back ticks in object values to interpolate js within a string (template literals)
})