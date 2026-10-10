import AttributeChip from './AttributeChip'

function DiscoverCard({ cat, banned, onToggleBan }) {
  return (
    <div className="discover-card">
      <div className="ribbon">Today's Guest</div>

      <div className="photo-frame">
        <img src={cat.image} alt={cat.breed} />
      </div>

      <div className="card-info">
        <div className="attr-row">
          <span className="attr-label">Breed</span>
          <div className="chip-group">
            <AttributeChip label={cat.breed} banned={banned.has(cat.breed)} onClick={onToggleBan} />
          </div>
        </div>

        <div className="attr-row">
          <span className="attr-label">Origin</span>
          <div className="chip-group">
            <AttributeChip label={cat.origin} banned={banned.has(cat.origin)} onClick={onToggleBan} />
          </div>
        </div>

        <div className="attr-row">
          <span className="attr-label">Temperament</span>
          <div className="chip-group">
            {cat.temperament.map((t) => (
              <AttributeChip key={t} label={t} banned={banned.has(t)} onClick={onToggleBan} />
            ))}
          </div>
        </div>

        <div className="stat-row">
          <span>Life span: {cat.lifeSpan}</span>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard