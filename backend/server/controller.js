// Set up global variable to mock a DB
let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 30, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 40, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  let globalId = 4

  const handlerFunctions = {

    getInvoices:  (req, res) => {
        res.send({
            message: "Here are all the invoices",
            invoices: TEST_DATA
        })
      },

      addInvoice: (req, res) => {
        // Get values from req.body
        const { description, rate, hours } = req.body
        // Create a new object with those values
        const newInvoice = {
            id: globalId,
            description: description,
            rate: rate,
            hours: hours
        }
        //Increment globalId for the next invoice
        globalId++
        // Add the newInvoice object to TEST_DATA
        TEST_DATA.push(newInvoice)
        // Send response
        res.send({
            message: "New Invoice created successfully",
            newInvoice: newInvoice
        })
      },

      deleteInvoice: (req, res) => {
        //Extract the value of 'id' from params
        const { id } = req.params
        // Filter out the invoice with that 'id' from TEST_DATA
        TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)
        // Send response
        res.send({
            message: "Invoice deleted",
            invoices: TEST_DATA
        })
      },

      editInvoice: (req,res) => {
        // Grab invoice data from req.body
        const { id, description, rate, hours } = req.body
        // Find index of this invoice by its id
        const idx = TEST_DATA.findIndex((invoice) => invoice.id === +id)
        // Grab that invoice at the [idx]
        const invoice = TEST_DATA[idx]
        // Update its values
        invoice.description = description
        invoice.rate = +rate
        invoice.hours = +hours
        // Send it back
        res.send({
            message: "Invoice updated successfully",
            updatedInvoice: invoice
        })
      }

  }

  export default handlerFunctions