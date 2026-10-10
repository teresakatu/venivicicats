function History({ history }) {
  return (
    <section className="history">
      <h3>Previously Seen ({history.length})</h3>
      {history.length === 0 ? (
        <p className="empty-note">Your discoveries will show up here.</p>
      ) : (
        <div className="history-grid">
          {history.map((c, i) => (
            <div className="history-item" key={`${c.id}-${i}`}>
              <img src={c.image} alt={c.breed} />
              <span>{c.breed}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default History
