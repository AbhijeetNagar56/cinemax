import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Rated from './pages/Rated'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/rated" element={<Rated />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/:genre" element={<Genres />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
