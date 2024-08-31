import React from "react"

function AmPmField({ edit, value, onValueChange }) {
    return edit ? (
        <td>
            <select 
                id="time"
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                >

                <option value=''></option>
                <option value='AM'>Morning</option>
                <option value='PM'>Evening</option>
            </select>
        </td>
            
    ) : (
        <div>{value}</div>
    )
}

export default AmPmField