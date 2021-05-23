// import logo from './logo.svg'
import styled from 'styled-components'
// import { Helmet } from 'react-helmet'

import Head from './Components/Head'
import Inputform from './Components/InputForm'
import RecepieList from './Components/RecepieList'
import { GlobalProvider } from './Store/GlobalState'
import GlobalStyle from './globalStyle'
import { useEffect, useRef, useState } from 'react'

function App() {
  // const [y, setY] = useState(window.scrollY)

  // const ref = useRef(null)
  const ref = useRef()

  const [isFixedHead, setIsFixedHead] = useState(false)
  const [scrollDir, setScrollDir] = useState('scrolling down')

  /* const handleScroll = useCallback(() => {
    console.log(
      ref.current.parentElement.parentElement.children[0].offsetHeight,
      ref.current.parentElement.parentElement.children[0].offsetTop * 2,
      parseInt(window.pageYOffset),
      window.scrollY,
      y
    )
    // console.dir(ref.current.parentElement.parentElement.children[0])
    // parentElement.parentElement.children[0].offsetTop

    if (y > window.scrollY && !isFixedHead) {
      console.log('qui')
    }
    setY(window.pageYOffset)

    // if (window.pageYOffset > ref.current.offsetTop) {
    if (
      ref.current.parentElement.parentElement.children[0].offsetHeight +
        ref.current.parentElement.parentElement.children[0].offsetTop * 2 -
        parseInt(window.pageYOffset) <
      0
    ) {
      setIsFixedHead(true)
    } else {
      setIsFixedHead(false)
    }
  }, [])
  */

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      // if (lastScrollY < 68 && scrollDir === 'scrolling down') {
      //   console.log('q', ref.current, lastScrollY)

      // }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
        // if (scrollDir === 'scrolling down') {
        // ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // }
        if (
          ref.current.parentElement.parentElement.children[0].offsetHeight +
            ref.current.parentElement.parentElement.children[0].offsetTop * 2 -
            parseInt(window.pageYOffset) <
          -15
        ) {
          setIsFixedHead(true)
        } else if (
          ref.current.parentElement.parentElement.children[0].offsetHeight +
            ref.current.parentElement.parentElement.children[0].offsetTop * 2 -
            parseInt(window.pageYOffset) >
          30
        ) {
          setIsFixedHead(false)
        }
      }
    }

    window.addEventListener('scroll', () => handleScroll())
    // console.log(scrollDir)

    // console.log(
    //   ref.current.parentElement.parentElement.children[0].offsetHeight,
    //   ref.current.parentElement.parentElement.children[0].offsetTop * 2,
    //   Math.round(parseInt(window.pageYOffset) / 10) * 10,
    //   ref.current.parentElement.parentElement.children[0].offsetHeight +
    //     ref.current.parentElement.parentElement.children[0].offsetTop * 2 -
    //     Math.round(parseInt(window.pageYOffset) / 10) * 10,
    //   window,
    //   window.scrollY
    // )

    return () => window.removeEventListener('scroll', () => handleScroll())
    // }, [handleScroll])
  }, [scrollDir, isFixedHead])

  // const { searchRecepie } = useContext(GlobalContext)
  // searchRecepie()

  return (
    <GlobalProvider>
      <GlobalStyle />
      <StyledWrapper>
        <Head />
        <Inputform ref={ref} isFixedHead={isFixedHead} />

        <RecepieList />
      </StyledWrapper>
    </GlobalProvider>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
