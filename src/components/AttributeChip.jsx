function AttributeChip({ label, banned, onClick }) {
  return (
    <button
      type="button"
      className={`chip ${banned ? 'chip-banned' : ''}`}
      onClick={() => onClick(label)}
      title={banned ? 'Click to remove from ban list' : 'Click to add to ban list'}
    >
      {label}
    </button>
  )
}

export default AttributeChip
