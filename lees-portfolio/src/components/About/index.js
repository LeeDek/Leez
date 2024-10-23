import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
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
    </div>
  )
}

export default About
