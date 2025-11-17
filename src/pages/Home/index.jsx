import HeroFullWidthCard from '../../components/HeroFullWidthCard'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <HeroFullWidthCard
        subtitle="Welcome to"
        title="Aha CKMH"
        description="This is a sample hero card component showcasing a full-width design with gradient background"
      />
      <div className="home-content">
        <h2>Additional Content</h2>
        <p>You can add more sections below the hero component</p>
      </div>
    </div>
  )
}

export default Home
