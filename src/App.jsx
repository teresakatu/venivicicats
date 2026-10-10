import { useState } from 'react'
import './App.css'
import { fetchRandomCat } from './api'
import CafeHeader from './components/CafeHeader'
import SideDecor from './components/SideDecor'
import DiscoverCard from './components/DiscoverCard'
import BanList from './components/BanList'
import History from './components/History'

function App() {
  const [cat, setCat] = useState(null)
  const [history, setHistory] = useState([])
  const [banned, setBanned] = useState(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleDiscover = async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await fetchRandomCat(banned)
      if (!result) {
        setError("Couldn't find a match — try clearing something off your ban list.")
      } else {
        setCat(result)
        setHistory((prev) => [result, ...prev])
      }
    } catch (err) {
      if (err.message === 'missing_key') {
        setError('Add your free TheCatAPI key to .env as VITE_CAT_API_KEY to see breed info.')
      } else {
        setError('Something went wrong fetching a cat. Try again.')
      }
    }

    setLoading(false)
  }

  const toggleBan = (value) => {
    setBanned((prev) => {
      const next = new Set(prev)
      if (next.has(value)) next.delete(value)
      else next.add(value)
      return next
    })
  }

  return (
    <div className="page">
      <CafeHeader />

      <div className="interior">
        <SideDecor side="left" />

        <div className="App">
          <div className="col-main">
            <p className="description">
              Pull up a chair! Discover a random cat, then ban any breed, origin, or trait you're done seeing.
            </p>

            <button className="discover-button" onClick={handleDiscover} disabled={loading}>
              {loading ? 'Discovering...' : 'Discover a Cat'}
            </button>

            {error && <p className="error-message">{error}</p>}

            {cat ? (
              <DiscoverCard cat={cat} banned={banned} onToggleBan={toggleBan} />
            ) : (
              <div className="card-placeholder">Press Discover to meet your first guest</div>
            )}
          </div>

          <div className="col-side">
            <BanList banned={[...banned]} onToggleBan={toggleBan} />
            <History history={history} />
          </div>
        </div>

        <SideDecor side="right" />
      </div>

      <div className="floor" aria-hidden="true" />
    </div>
  )
}

export default App