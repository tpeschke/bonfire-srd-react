import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import ChapterNavigate from './components/chapterNavigate/ChapterNavigate'
import FireBackground from './components/fireBackground/FireBackground'
import Header from './components/header/Header'
import LocationHook from './hooks/LocationHook'
import { isUserLoggedOn, setUser } from './redux/slices/userSlice'

import AllRoutes from './routes/AllRoutes'
import axios from 'axios'
import { useEffect } from 'react'
import { accessURL } from './frontend-config'
import { Tooltip } from 'react-tooltip'
import Footer from './components/footer/Footer'

function App() {
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
    </div>
  )
}

export default App
