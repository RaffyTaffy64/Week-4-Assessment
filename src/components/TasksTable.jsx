import React, { useState, useEffect } from 'react'
import './Motivation.css'
import TableHeader from './TableHeader'
import AddTaskButton from './AddTaskButton'
import TaskRow from './TaskRow'
import QuoteBox from './QuoteBox'
import axios from 'axios'

function TasksTable({ tasks }) {
    const [currentTasks, setCurrentTasks] = useState(tasks)

    useEffect(() => {
        setCurrentTasks(tasks)
    }, [tasks])

    const addTask = () => {
        const newTask = { task: "Click 'Edit' to add new task", time: "🌞 or 🌛" }

        axios.post('/api/addTask', newTask)
            .then((res) => {
                setCurrentTasks([...currentTasks, res.data.newTask])
            })
            .catch((err) => console.error(err))
    };

    const deleteTask = (id) => {
        axios.delete(`/api/deleteTask/${id}`)
            .then((res) => {
                setCurrentTasks(res.data.tasks)
            })
            .catch((err) => console.error(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {currentTasks.map((task) => (
                        <TaskRow
                            key={task.id}
                            initialTasks={task}
                            initialEdit={false}
                            deleteFunc={() => deleteTask(task.id)}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <AddTaskButton addClick={addTask} />
                </tfoot>
            </table>
        </div>
    )
}

export default TasksTable

