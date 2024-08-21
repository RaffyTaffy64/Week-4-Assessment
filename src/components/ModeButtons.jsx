
function ModeButtons({ isEditing }) {
    //I expect TableRow to pass down 'isEditing' prop as a boolean value to all its children
  
  return isEditing ? (
    <td>
        <button>Save</button>
    </td>
  ) : (
    <td>
        <button>Delete</button>
        <button>Edit</button>
    </td>
  )
}

export default ModeButtons