import './InvoiceTable.css'
import TableHeader from './TableHeader.jsx'
import AddRowButton from './AddRowButton.jsx'
import TableRow from './TableRow.jsx'
import { useState } from 'react'

let globalId = 4


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

  // In order to give our "AddRowButton" the ability to add a value to "currentData", we'll need a function:
  const addRow = () => {
    // Create a new object to represent a new "row" or entry in the "currentData" array
    const newRow= {
      id: globalId,
      description: "Description",
      rate: "",
      hours: ""
    }
    // Add "newRow" to "currentData"
    setCurrentData([...currentData, newRow])
    globalId++
  }

  // Delete function:
  const deleteRow = (id) => {
    const filteredData = currentData.filter((el) => el.id !== id)
    setCurrentData(filteredData)
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