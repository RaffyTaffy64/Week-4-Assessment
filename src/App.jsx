import React, { useEffect, useState } from 'react'
import './App.css'
import TasksTable from './components/TasksTable'
import QuoteBox from './components/QuoteBox'
import axios from 'axios'

function App() {
    const [tasks, setTasks] = useState([])
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get('/api/tasks')
            .then((res) => {
                setTasks(res.data.tasks)
            })
            .catch((err) => console.error(err))

        axios.get('/api/quotes')
            .then((res) => {
                setQuotes(res.data.quotes)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <QuoteBox quotes={quotes} />
            <TasksTable tasks={tasks} />
        </div>
    )
}

export default App


