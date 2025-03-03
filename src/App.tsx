import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='listing' element={<h1>Listing</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
