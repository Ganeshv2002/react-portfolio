import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import LogoS from './index2.js'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 3,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <>
      <div className="logo-container" ref={bgRef}>
        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 559 897"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1) scaleY(-1)"
            fill="none"
          >
            <path
              ref={outlineLogoRef}
              d="M 206 445.799 C 233.128 445.799 259.756 445.799 286.722 445.799 C 286.722 516.36 286.722 586.437 286.722 656.848 C 285.689 656.987 284.593 657.26 283.496 657.262 C 266.663 657.29 249.829 657.213 232.997 657.341 C 229.721 657.366 228.405 656.435 227.875 653.001 C 226.052 641.183 223.806 629.431 221.539 616.625 C 217.598 620.916 214.398 624.88 210.712 628.323 C 200.505 637.855 190.386 647.518 179.688 656.48 C 167.07 667.05 153.126 666.872 139.964 657.9 C 125.833 648.268 111.563 638.493 99.021 626.966 C 83.9932 613.155 70.3987 597.718 56.8004 582.437 C 44.8437 569 39.5402 552.649 38.8974 534.747 C 38.3296 518.932 37.1962 503.116 37.2507 487.303 C 37.3818 449.317 37.735 411.323 38.7189 373.351 C 39.0231 361.61 41.349 349.88 43.293 338.235 C 45.3864 325.694 52.2312 315.435 60.2881 305.917 C 80.5909 281.931 103.331 260.63 128.348 241.521 C 149.628 225.268 171.421 224.962 193.682 237.346 C 235.16 260.421 267.545 292.212 285.279 337.217 C 290.432 350.294 290.405 350.464 279.011 358.49 C 261.855 370.574 244.566 382.471 227.32 394.426 C 225.983 395.352 224.533 396.114 223.331 396.835 C 218.768 386.238 214.795 375.689 209.782 365.661 C 200.711 347.517 188.791 331.299 174.36 317.001 C 164.952 307.679 157.917 307.225 147.81 315.832 C 132.819 328.599 123.119 343.941 122.007 364.554 C 119.258 415.527 120.317 466.486 120.939 517.468 C 121.213 539.912 130.365 557.572 147.27 571.659 C 157.583 580.253 166.028 581.011 176.572 572.601 C 184.969 565.904 192.385 557.916 199.843 550.123 C 205.924 543.769 207.037 535.323 207.917 526.991 C 208.387 522.539 208.584 518.058 208.946 512.993 C 206.906 512.877 205.169 512.696 203.431 512.691 C 192.765 512.665 182.096 512.572 171.433 512.742 C 168.162 512.794 167.123 511.749 167.144 508.471 C 167.268 488.972 167.27 469.471 167.143 449.972 C 167.121 446.627 168.293 445.698 171.501 445.741 C 182.832 445.894 194.167 445.799 206 445.799 Z"
            />
          </g>
        </svg>
      </div>
      <LogoS />
    </>
  )
}

export default Logo
