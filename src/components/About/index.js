import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey there! I'm a university student proficient in both full-stack
            development and data science. However, my true passion lies in
            front-end development, where I can merge technical expertise with
            creativity to craft captivating user experiences.
          </p>
          <p>
            I thrive as a creative thinker, constantly generating fresh ideas
            and embracing challenges as opportunities for growth. While I might
            take things at my own pace, I'm committed to delivering quality work
            on time, always seeking ways to enhance my skills and knowledge.
          </p>
          <p>
            My love for art and design complements my tech-savviness, allowing
            me to infuse aesthetics into every project. As I gear up for
            freelancing and explore job opportunities, my ultimate goal is to
            join a prestigious IT company after completing my degree,
            contributing my skills to impactful projects.Explore my portfolio to
            witness the fusion of art and technology, and let's connect to
            explore potential collaborations. Together, we can create engaging
            websites and push the boundaries of digital innovation.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon
                icon={faNodeJs}
                color="#DD0031"
                className="logo"
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon
                icon={faHtml5}
                color="#F06529"
                className="logo"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" className="logo" />
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faReact}
                color="#5ED4F4"
                className="logo"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#EFD81D"
                className="logo"
              />
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#EC4D28"
                className="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
