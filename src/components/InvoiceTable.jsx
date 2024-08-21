import './InvoiceTable.css'
import TableHeader from './TableHeader.jsx'
import AddRowButton from './AddRowButton.jsx'
import TableRow from './TableRow.jsx'


function InvoiceTable({ initialData }) {

  const rows = initialData.map((invoiceItem) => {
    return (
      <TableRow
        key={invoiceItem.id}
        initialInvoiceData={invoiceItem}
        initialIsEditing={false}
      />
    )
  })

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
            <AddRowButton />
          </tfoot>

        </table>
    </div>
  )
}

export default InvoiceTable