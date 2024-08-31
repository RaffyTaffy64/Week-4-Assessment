import React from "react"

function Buttons({ edit, editClick, saveClick, deleteFunc }) {
    return (
        <td>
            {edit ? (
                <button onClick={saveClick}>Save</button>
            ) : (
                <>
                    <button onClick={deleteFunc}>Delete</button>
                    <button onClick={editClick}>Edit</button>
                </>
            )}
        </td>
    )
}

export default Buttons

