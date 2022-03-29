const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'test tshirt',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {

    
    const { id } = req.params;
    const { logo } = req.body;
    
   if (!logo) {
       res.status(418).send({ message: "we need a logo!" }) 
    }
   res.send({
        tshirt: `Shirt with you ${logo} and ID of ${id}`,
    });  
})


// // import & initialize express
// const express = require('express');
// const app = express();
// const PORT = 8080;

// // middleware that converts data to JSON
// app.use(express.json())

// // listen on PORT
// app.listen(
//     PORT,
//     // callback function logs URL to console
//     () => console.log(`it's alive on http://localhost:${PORT}`)
// )

// // GET request to /tshirt Endpoint 
// // takes req & res as parameters
// app.get('/tshirt', (req, res) => {
//     // response status code 200 OK
//     // send value of object key/s to user
//     res.status(200).send({
//         tshirt: 'test tshirt',
//         size: 'large'
//     })
// })

// // POST request to /tshirt/:id
// // :id - ROUTE PARAMS - capture dynamic values in the URL
// app.post('/tshirt/:id', (req, res) => {

    
//     // get id using request parameters 
//     // destructure request parameters & find the id & store as a constant variable 
//     const { id } = req.params;
//     // get logo from request body
//     // destructure request body & find the logo key & store its value in a constant variable 
//     const { logo } = req.body;

//     // if we can't find the logo... then 
//     // response status 418 .send() [you can use objects in the send function]
//     if (!logo) {
//        res.status(418).send({ message: "we need a logo!" }) 
//     }
//     // if we found the logo.. then
//     // send({ key: value }) [ send object value ] 
//     res.send({
//         tshirt: `Shirt with you ${logo} and ID of ${id}`,
//     });  
//     // you can use back ticks in object values to interpolate js within a string (template literals)
// })