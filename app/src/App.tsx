import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import ChapterNavigate from './components/chapterNavigate/ChapterNavigate'
import FireBackground from './components/fireBackground/FireBackground'
import Header from './components/header/Header'
import LocationHook from './hooks/LocationHook'
import { isUserLoggedOn, setUser } from './redux/slices/userSlice'

import AllRoutes from './routes/AllRoutes'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { accessURL } from './frontend-config'
import { Tooltip } from 'react-tooltip'
import Footer from './components/footer/Footer'
import ChapterHook from './hooks/ChapterHooks'
import { ToastContainer, Slide } from 'react-toastify'

function App() {
  const [hasVisitedChapter, setHasVisitedChapter] = useState(false)

  const { backgroundPreloadChapter } = ChapterHook()
  const { pathname, hash } = LocationHook()

  const userIsLoggedIn = useSelector(isUserLoggedOn)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userIsLoggedIn) {
      axios.get(accessURL + '/isLoggedIn').then(({ data }) => {
        dispatch(setUser(data))
      })
    }
  }, []);

  useEffect(() => {
    if (userIsLoggedIn || (pathname.includes('rules') || pathname.includes('players') && !hasVisitedChapter)) {
      console.log('starting preload')
      setHasVisitedChapter(true)
      backgroundPreloadChapter()
    }
  }, [userIsLoggedIn, pathname])
  
  return (
    <div className='body'>
      <Header pathname={pathname}/>
      <div className='content-body-shell'>
        <ChapterNavigate />
        <AllRoutes pathname={pathname} hash={hash} />
      </div>
      <Footer />
      <FireBackground />
      <Tooltip id="my-tooltip" place="bottom" />
      <ToastContainer transition={Slide} stacked theme="colored" closeOnClick />
    </div>
  )
}

export default App
