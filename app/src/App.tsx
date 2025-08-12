import './App.css'
import ChapterNavigate from './components/chapterNavigate/ChapterNavigate'
import FireBackground from './components/fireBackground/FireBackground'
import Header from './components/header/Header'
import LocationHook from './hooks/LocationHook'

import AllRoutes from './routes/AllRoutes'

function App() {
  const { pathname } = LocationHook()

  return (
    <div className='body'>
      <Header pathname={pathname}/>
      <div className='content-body-shell'>
        <ChapterNavigate />
        <AllRoutes pathname={pathname} />
      </div>
      <FireBackground />
    </div>
  )
}

export default App
