import React, { useState } from 'react'
import Buttons from './Buttons'
import AmPmField from './AmPmField'
import TaskField from './TaskField'
import axios from 'axios'

function TaskRow({ initialEdit, initialTasks, deleteFunc }) {
    const [edit, setEditMode] = useState(initialEdit)
    const [task, setTask] = useState(initialTasks.task)
    const [time, setTime] = useState(initialTasks.time)

    const changeEditMode = () => setEditMode(true)
    const changeSaveMode = () => {
        const bodyObj = {
            id: initialTasks.id,
            task: task,
            time: time
        };

        axios.put('/api/editTask', bodyObj)
            .then((res) => {
                setTime(res.data.updatedTask.time)
                setTask(res.data.updatedTask.task)
                setEditMode(false)
            })
            .catch((err) => console.error(err))
    }

    return (
        <tr>
            <Buttons
                edit={edit}
                editClick={changeEditMode}
                saveClick={changeSaveMode}
                deleteFunc={deleteFunc}
            />
            <TaskField
                edit={edit}
                value={task}
                onValueChange={setTask}
            />
            <AmPmField
                edit={edit}
                value={time}
                onValueChange={setTime}
            />
        </tr>
    )
}

export default TaskRow

