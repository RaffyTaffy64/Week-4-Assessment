
function HoursCell({ isEditing, value, onValueChange }) {
  return isEditing ? (
    <input 
        type="text" 
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
  ) : (
    <td>{value}</td>
  )
}

export default HoursCell