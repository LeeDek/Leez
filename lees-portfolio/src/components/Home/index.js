import React from 'react'
import leeLogo from '../../assets/images/Lee_logo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import '../Layout/index.scss'

const Home = () => {
  return (
    <div className="container homePage">
      <div className="textZone">
        <h1>
          Hi,
          <br />
          I'm
          <img src={leeLogo} alt="developer" />
          <br />
          web developer
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
