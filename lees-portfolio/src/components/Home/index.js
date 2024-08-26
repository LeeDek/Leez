import { useEffect, useState } from 'react'
import leeLogo from '../../assets/images/Lee_logo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../App.scss'
import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const jobArray1 = ['W', 'e', 'b']
  const jobArray2 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
      console.log('letterClass updated to text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container homePage">
      <div className="textZone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15`}>
            <img className="leeLogo" src={leeLogo} alt="developer" />
          </span>

          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray1}
            idx={15}
          />
          <span className={letterClass}>&nbsp;</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray2}
            idx={22}
          />
        </h1>
        <h2>Full-Stack Developer</h2>
        <Link to="contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
