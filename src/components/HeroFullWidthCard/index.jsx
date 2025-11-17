import './HeroFullWidthCard.css'

function HeroFullWidthCard({ title, subtitle, description, imageUrl }) {
  return (
    <div className="hero-full-width-card">
      {imageUrl && (
        <div className="hero-image-container">
          <img src={imageUrl} alt={title} className="hero-image" />
        </div>
      )}
      <div className="hero-content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <h1 className="hero-title">{title}</h1>
        {description && <p className="hero-description">{description}</p>}
      </div>
    </div>
  )
}

export default HeroFullWidthCard
