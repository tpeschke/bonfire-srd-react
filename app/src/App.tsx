import './App.css'
import ChapterNavigate from './components/chapterNavigate/ChapterNavigate'
import FireBackground from './components/fireBackground/FireBackground'
import Header from './components/header/Header'

import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div className='body'>
      <Header />
      <div className='content-body-shell'>
        <ChapterNavigate />
        <AllRoutes />
      </div>
      <FireBackground />
    </div>
  )
}

export default App
