import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <div className='bg-home'>
      <div className='home-container'>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Explore a collection of projects, certifications, and hands-on
          experience that showcase my skills and passion for software development.
        </p>
        <Link to="/projects">
          <button type="button">View Projects →</button>
        </Link>
      </div>
    </div>
  )
}

export default Home