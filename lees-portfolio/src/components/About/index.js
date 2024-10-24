import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import '../Layout/index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
      console.log('letterClass updated to text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <p>
          My passion for web and mobile development is fueled by a strong
          imagination and a clear vision for creating high-quality user
          experiences. I love bringing ideas to life through vibrant colors,
          sleek designs, and dynamic animations, making sure every interface is
          engaging and intuitive.
        </p>
        <p>
          I’m a naturally curious and hardworking developer who thrives in
          collaborative environments. I enjoy growing with teams, learning from
          each challenge, and working together to create impactful solutions. I
          never back down from a problem and persist until I find the best
          possible outcome.
        </p>
        <p>
          Each project I take on is unique, with no two ever alike in design,
          approach, or execution. I bring fresh ideas to every challenge,
          ensuring that my work stands out through tailored solutions and
          creative thinking.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#00DCFF" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#2465F1" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJs} color="#EACA31" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faHtml5} color="#E54C21" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNodeJs} color="#40A15C" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGithub} color="#5E227F" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
