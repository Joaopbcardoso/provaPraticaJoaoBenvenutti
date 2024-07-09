import './App.css'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Clubs from './components/Clubs'
import Header from './components/Header'
import Home from './pages/Home'
import Players from './components/Players'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/players/:clubID" element={<Players />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
