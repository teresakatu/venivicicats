import AttributeChip from './AttributeChip'

function BanList({ banned, onToggleBan }) {
  return (
    <section className="ban-list">
      <h3>Ban List</h3>
      {banned.length === 0 ? (
        <p className="empty-note">Click a breed, origin, or temperament trait above to ban it.</p>
      ) : (
        <div className="chip-group">
          {banned.map((value) => (
            <AttributeChip key={value} label={value} banned onClick={onToggleBan} />
          ))}
        </div>
      )}
    </section>
  )
}

export default BanList
