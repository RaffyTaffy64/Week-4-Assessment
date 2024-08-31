import React from 'react'

function TaskField({ edit, value, onValueChange }) {
    return edit ? (
        <td>
            <input
                type="text"
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
    ) : (
        <td>{value}</td>
    );
}

export default TaskField