import './App.css';
import InvoiceTable from './components/InvoiceTable.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [invoiceData, setInvoiceData] = useState([])

  //Get TEST_DATA from server


  useEffect(() => {
    axios.get('/api/invoices')
    .then((res) => {
      setInvoiceData(res.data.invoices)
    })
  }, [])

  return <InvoiceTable initialData={invoiceData} />
}

export default App;
