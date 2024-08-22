import './InvoiceTable.css'
import TableHeader from './TableHeader.jsx'
import AddRowButton from './AddRowButton.jsx'
import TableRow from './TableRow.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function InvoiceTable({ initialData }) {

  const[currentData, setCurrentData] = useState(initialData)

  const rows = currentData.map((invoiceItem) => {
    return (
      <TableRow
        key={invoiceItem.id}
        initialInvoiceData={invoiceItem}
        initialIsEditing={false}
        deleteFunc={() => deleteRow(invoiceItem.id)}
      />
    )
  })

  useEffect(() => {
    setCurrentData(initialData)
  }, [initialData])
  // In order to give our "AddRowButton" the ability to add a value to "currentData", we'll need a function:
  const addRow = () => {
    // Create a new object to represent a new "row" or entry in the "currentData" array
    const newRow= {
      description: "Description Placeholder",
      rate: "1",
      hours: "1"
    }

    axios.post('/api/addInvoice', newRow)
    .then((res) => {
      setCurrentData([...currentData, res.data.newInvoice])
    })
    // Add "newRow" to "currentData"
  }

  // Delete function:
  const deleteRow = (id) => {
    // const filteredData = currentData.filter((el) => el.id !== id)
    // setCurrentData(filteredData)
    axios.delete(`/api/deleteInvoice/${id}`)
    .then((res) => {
      // Need to reset currentData to the filtered array
      setCurrentData(res.data.invoices)
    })
  }

  return (
    <div>
        <table>
          <thead>
            <TableHeader />
          </thead>

          <tbody>
            {rows}
          </tbody>

          <tfoot>
            <AddRowButton addClick={addRow} />
          </tfoot>

        </table>
    </div>
  )
}

export default InvoiceTable