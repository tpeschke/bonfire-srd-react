import './App.css'
import ChapterNavigate from './components/chapterNavigate/ChapterNavigate'
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
    </div>
  )
}

export default App
