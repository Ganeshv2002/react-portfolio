// index.js
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faPhp,
  faJava,
  faPython,
  faRProject,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const boxWidth = 33
const animationDuration = 10
const animationStepDuration = animationDuration / 7

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
        <p>
          First off, the tech realm. I wield languages like C, C++, Python, Java
          – they're my digital tools of choice. Then there's the modern symphony
          of JavaScript, HTML, and CSS – together, they help me craft web
          experiences that turn heads and hearts. And when the spotlight's on
          user interfaces, ReactJS, alongside HTML and CSS, transforms designs
          into captivating interactions. Oh, and backstage, I've got my ace
          cards: Node.js, PHP, and the database wizardry of MySQL – they keep
          the digital show running without a hitch.
        </p>
        <p>
          But here's the kicker – I'm not just about code. Teamwork? That's my
          jam. I thrive in diverse crews, tossing ideas around and getting stuff
          done as a collective powerhouse. Leadership? It's in the mix too. When
          the going gets tough, I step up to the plate and guide the ship
          through choppy waters. Let's talk about mistakes. They're not a
          roadblock; they're stepping stones. I've got this knack for learning
          from slip-ups and using them to grow. Problem-solving? It's my
          superpower. Challenges? They're like puzzles, and I'm the puzzle
          master, fitting pieces together with creative solutions.
        </p>
        <p>
          Now, let's chat languages: English? Got it covered – reading, writing,
          and chatting are no sweat. And then there's Tamil, my native language,
          where I feel right at home. So, here's the deal: I'm a fresh face, but
          I'm hungry to learn, adapt, and make my mark. If you're ready to dive
          into projects where innovation and teamwork shine, let's have a chat.
          Together, we'll build digital wonders that turn heads and challenge
          norms. Eager to get started? Reach out and let's make some tech magic
          happen!
        </p>
      </div>

      <div id="wrapper">
        <div class="gears" id="two-gears">
          <div class="gears-container">
            <div class="gear-rotate"></div>
            <div class="gear-rotate-left"></div>
          </div>
        </div>
      </div>

      <div className="tiles">
        <svg id="loading" viewBox="0 0 100 80">
          <g transform="translate(50 0) scale(0.707 0.707) rotate(0 0 0)">
            <g className="rect" id="rect1" transform="translate(0 0)">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect2"
              transform={`translate(${boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faCss3}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect3"
              transform={`translate(${2 * boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faPhp}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect4"
              transform={`translate(${3 * boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faJava}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect5"
              transform={`translate(${4 * boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faNodeJs}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect6"
              transform={`translate(${5 * boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faPython}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
            <g
              className="rect"
              id="rect7"
              transform={`translate(${6 * boxWidth} 0)`}
            >
              <FontAwesomeIcon
                icon={faRProject}
                color="grey"
                className="logoicon"
                width="30px"
              />
            </g>
          </g>
        </svg>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default About
