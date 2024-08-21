
function DescriptionCell({ isEditing, value }) {
  return isEditing ? (
    <td>
        <input type="text" value={value}/>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default DescriptionCell