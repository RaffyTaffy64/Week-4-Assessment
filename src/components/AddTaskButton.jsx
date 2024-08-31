import React from 'react'

function AddTaskButton({ addClick }) {
    return (
        <tr>
            <td></td>
            <td>
                <button onClick={addClick}>Add Task</button>
            </td>
        </tr>
    )
}

export default AddTaskButton
