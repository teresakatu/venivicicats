function CafeHeader() {
    const roofRows = [5, 9, 13, 17, 21]
    const stripes = Array.from({ length: 18 }, (_, i) => i)
  
    return (
      <header className="storefront">
        <div className="building">
          <svg
            className="cafe-art"
            viewBox="0 0 160 50"
            shapeRendering="crispEdges"
            role="img"
            aria-label="Pixel art cat cafe roof with a striped awning"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* clouds */}
            <g fill="#ffffff">
              <rect x="22" y="4" width="14" height="3" />
              <rect x="25" y="2" width="8" height="2" />
              <rect x="124" y="5" width="16" height="3" />
              <rect x="128" y="3" width="8" height="2" />
            </g>
  
            <g transform="translate(0 8)">
              {/* flat rectangular roof: cap, tile rows, base trim */}
              <rect x="10" y="2" width="140" height="3" fill="#8f4a14" />
              {roofRows.map((y, idx) => (
                <g key={y}>
                  <rect x="12" y={y} width="136" height="4" fill="#c96a1b" />
                  <rect x="12" y={y + 3} width="136" height="1" fill="#8f4a14" />
                  {Array.from({ length: 17 }, (_, k) => (
                    <rect key={k} x={15 + k * 8 + (idx % 2) * 4} y={y} width="1" height="3" fill="#a65a17" />
                  ))}
                </g>
              ))}
              <rect x="12" y="5" width="136" height="1" fill="#e08a3d" />
              <rect x="10" y="25" width="140" height="2" fill="#8f4a14" />
  
              {/* awning: beam, stripes, scalloped edge */}
              <rect x="8" y="27" width="144" height="2" fill="#3d2b1f" />
              {stripes.map((i) => {
                const color = i % 2 ? '#fffaf0' : '#f28f3b'
                const x = 8 + i * 8
                return (
                  <g key={i} fill={color}>
                    <rect x={x} y="29" width="8" height="8" />
                    <rect x={x + 1} y="37" width="6" height="2" />
                    <rect x={x + 2} y="39" width="4" height="1" />
                  </g>
                )
              })}
            </g>
          </svg>
  
          <div className="facade">
            <div className="window window-left" aria-hidden="true" />
            <div className="window window-right" aria-hidden="true" />
            <div className="sign">
              <h1>Veni Vici!</h1>
              <span className="sign-sub">Cat Cafe</span>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default CafeHeader