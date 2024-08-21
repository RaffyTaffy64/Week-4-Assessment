
function ModeButtons({ isEditing, editClick, saveClick}) {
    //I expect TableRow to pass down 'isEditing' prop as a boolean value to all its children
  
  return isEditing ? (
    <td>
        <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
        <button>Delete</button>
        <button onClick={editClick}>Edit</button>
    </td>
  )
}

export default ModeButtons