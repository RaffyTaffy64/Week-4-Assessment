import express from 'express'
import morgan from 'morgan' //Helps with logging for debugging; not necessary
import ViteExpress from 'vite-express'

//Set up express instance as 'app'
const app = express()

//Set up middleware
app.use(morgan('dev')) //while in dev environment, use morgan for additional logging, etc.
app.use(express.urlencoded({ extended: false })) // Allows us to interpret body objects from POST requests
app.use(express.static('public')) // for certain imports, check the 'public' directory first
app.use(express.json()) // lets the server and front-end know that they'll be communicating with JSON

// Import handler from controller file
import handlerFunctions from './controller.js'

  //Routes
  //Before creating end points, address the following:
  //- What is the purpose of this endpoint?
  //- Will I need any queries/params/body objects?
  //- What will the endpoint string look like? (URL)
  //- What should the response look like? (Keep consistent)

  //First endpoint (GET):
  //- To serve up an array of our invoice objects (TEST_DATA)
  //- No additional client info needed
  //- '/api/invoices' (--> full URL when hosted locally: http://localhost:2319/api/invoices)
  //- { message: "", invoices: [] } --> res.send({ messate: "", invoices: [] })
  app.get('/api/invoices', handlerFunctions.getInvoices)

  // Second endpoint (POST):
  //- Add a new row to our invoice data array
  //- Body object:
        // - description, rate, hours
  //- '/api/addInvoice'
  //- Send back the new object with a message:
  // - { message: "", newInvoice: {} }
  app.post('/api/addInvoice', handlerFunctions.addInvoice)

  // Third endpoint (DELETE):
  //- Delete a specific invoice from TEXT_DATA
  //- Need 'id' from req.params
  //- '/api/deleteInvoice/:id' --> /:id makes params object and whatever we put will be the value of 'id'
  //- { message: "", invoices: [] }
  app.delete('/api/deleteInvoice/:id', handlerFunctions.deleteInvoice)

  // Fourth endpoint (PUT):
  //- Update rate/description/hours on a specific invoice object
  //- Body - { id, description, rate, hours } 
  //- '/api/editInvoice'
  //- { message: "", updatedInvoice: {} }
  app.put('/api/editInvoice', handlerFunctions.editInvoice)


  //Open up door to server
  ViteExpress.listen(app, 2319, () => console.log("We've got a 23-19! Report to http://localhost:2319"))