// Component for rendering animated space background with stars and planets
export function SpaceBackground() {
  return (
    <>
      {/* Animated stars background */}
      <div className="stars">
        <div className="small"></div>
        <div className="medium"></div>
        <div className="big"></div>
      </div>
      {/* Animated floating planets */}
      <div className="planets">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
      </div>
    </>
  )
}

