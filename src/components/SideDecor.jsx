const svgProps = { shapeRendering: 'crispEdges', xmlns: 'http://www.w3.org/2000/svg' }
const INK = '#3d2b1f'

function Fish({ body, belly, fin }) {
  return (
    <svg viewBox="0 0 16 10" {...svgProps}>
      <g fill={fin}>
        <rect x="2" y="4" width="1" height="2" />
        <rect x="1" y="3" width="1" height="4" />
        <rect x="0" y="2" width="1" height="2" />
        <rect x="0" y="6" width="1" height="2" />
        <rect x="7" y="1" width="3" height="1" />
        <rect x="7" y="8" width="3" height="1" />
      </g>
      <g fill={body}>
        <rect x="6" y="2" width="5" height="1" />
        <rect x="4" y="3" width="9" height="1" />
        <rect x="3" y="4" width="11" height="2" />
        <rect x="4" y="6" width="9" height="1" />
        <rect x="6" y="7" width="5" height="1" />
      </g>
      <rect x="5" y="6" width="7" height="1" fill={belly} />
      <rect x="7" y="7" width="3" height="1" fill={belly} />
      <rect x="8" y="3" width="1" height="4" fill={fin} />
      <rect x="11" y="4" width="1" height="1" fill={INK} />
    </svg>
  )
}

function YarnBall() {
  const rows = [[0, 4, 4], [1, 2, 8], [2, 1, 10], [3, 0, 12], [4, 0, 12], [5, 0, 12], [6, 0, 12], [7, 0, 12], [8, 0, 12], [9, 1, 10], [10, 2, 8], [11, 4, 4]]
  const lines = [[4, 1], [5, 2], [6, 3], [7, 4], [8, 5], [9, 6], [10, 7], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]
  return (
    <svg viewBox="0 0 14 13" {...svgProps}>
      {rows.map(([y, x, w]) => <rect key={y} x={x} y={y} width={w} height="1" fill="#ff7d9a" />)}
      {lines.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#c2365a" />)}
      <rect x="10" y="11" width="3" height="1" fill="#c2365a" />
      <rect x="13" y="12" width="1" height="1" fill="#c2365a" />
    </svg>
  )
}

function ToyMouse() {
  return (
    <svg viewBox="0 0 16 10" {...svgProps}>
      <rect x="3" y="3" width="9" height="5" fill="#c9c9d4" />
      <rect x="3" y="7" width="9" height="1" fill="#9a9aae" />
      <rect x="12" y="4" width="2" height="3" fill="#c9c9d4" />
      <rect x="14" y="5" width="1" height="1" fill="#ff7d9a" />
      <rect x="7" y="1" width="2" height="2" fill="#ff9ec7" />
      <rect x="10" y="1" width="2" height="2" fill="#ff9ec7" />
      <rect x="12" y="4" width="1" height="1" fill={INK} />
      <g fill="#e8a0b0">
        <rect x="2" y="7" width="1" height="1" />
        <rect x="1" y="6" width="1" height="1" />
        <rect x="0" y="5" width="1" height="1" />
        <rect x="0" y="4" width="1" height="1" />
      </g>
    </svg>
  )
}

function JingleBall() {
  const rows = [[0, 3, 4], [1, 1, 8], [2, 0, 10], [3, 0, 10], [4, 0, 10], [5, 0, 10], [6, 0, 10], [7, 0, 10], [8, 1, 8], [9, 3, 4]]
  return (
    <svg viewBox="0 0 10 10" {...svgProps}>
      {rows.map(([y, x, w]) => <rect key={y} x={x} y={y} width={w} height="1" fill="#ffd23f" />)}
      <rect x="0" y="4" width="10" height="2" fill="#ef476f" />
      <rect x="2" y="2" width="2" height="1" fill="#ffffff" />
      <rect x="2" y="3" width="1" height="1" fill="#ffffff" />
      <rect x="2" y="8" width="6" height="1" fill="#e0a800" />
      <rect x="4" y="-1" width="2" height="1" fill={INK} />
    </svg>
  )
}

function FeatherWand() {
  return (
    <svg viewBox="0 0 16 16" {...svgProps}>
      {Array.from({ length: 10 }, (_, i) => <rect key={i} x={i} y={15 - i} width="2" height="1" fill="#8a5a35" />)}
      <rect x="11" y="6" width="1" height="4" fill={INK} />
      <g fill="#2a9d8f">
        <rect x="10" y="10" width="3" height="1" />
        <rect x="9" y="11" width="5" height="1" />
        <rect x="10" y="12" width="3" height="1" />
        <rect x="11" y="13" width="1" height="1" />
      </g>
      <rect x="11" y="10" width="1" height="3" fill="#7fd3c8" />
    </svg>
  )
}

function FishBone() {
  const parts = [
    [0, 2, 3, 4], [3, 3, 10, 2], [13, 2, 1, 4], [14, 1, 1, 6], [15, 1, 1, 2], [15, 5, 1, 2],
    [5, 1, 1, 2], [7, 1, 1, 2], [9, 1, 1, 2], [11, 1, 1, 2],
    [5, 5, 1, 2], [7, 5, 1, 2], [9, 5, 1, 2], [11, 5, 1, 2],
  ]
  return (
    <svg viewBox="-1 -1 18 10" {...svgProps}>
      {/* ink outline first, then the cream bone on top */}
      {parts.map(([x, y, w, h], i) => <rect key={`o${i}`} x={x - 1} y={y - 1} width={w + 2} height={h + 2} fill={INK} />)}
      {parts.map(([x, y, w, h], i) => <rect key={`b${i}`} x={x} y={y} width={w} height={h} fill="#fffaf0" />)}
      <rect x="1" y="3" width="1" height="1" fill={INK} />
    </svg>
  )
}

const LEFT = [
  <Fish key="f1" body="#f28f3b" belly="#ffc08a" fin="#c96a1b" />,
  <YarnBall key="y" />,
  <ToyMouse key="m" />,
  <FishBone key="b" />,
]
const RIGHT = [
  <Fish key="f2" body="#4fa3d9" belly="#a8d8f0" fin="#2b6fa3" />,
  <JingleBall key="j" />,
  <FeatherWand key="w" />,
  <Fish key="f3" body="#38b764" belly="#a7f070" fin="#257179" />,
]

// Props: side ('left' or 'right')
function SideDecor({ side }) {
  const items = side === 'left' ? LEFT : RIGHT
  return (
    <aside className={`side side-${side}`} aria-hidden="true">
      <div className="side-stack">
        {items.map((item, i) => (
          <div className="decor-item" key={i}>{item}</div>
        ))}
      </div>
    </aside>
  )
}

export default SideDecor