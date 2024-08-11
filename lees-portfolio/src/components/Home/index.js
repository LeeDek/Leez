import { useEffect, useState } from 'react'
import leeLogo from '../../assets/images/Lee_logo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import '../../App.scss'
import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animation')
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
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

          <img src={leeLogo} alt="developer" />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={0}
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
