import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Component/MovieList/MovieList';
import Movie from './Pages/MovieDetail/Movie';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>ErrorPage</h1>}></Route>
        </Routes>

      </Router>
    </div>
  )
}

export default App;
