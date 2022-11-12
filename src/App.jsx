import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import People from './pages/People/People';
import Networks from './pages/Networks/Networks';
import Movie from './pages/Movie/Movie'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TVMAZE_API } from './api';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [query, setQuery] = useState('');

  // /search/shows?q=:query
  // /shows?page=:num
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(query ? TVMAZE_API + `search/shows?q=${query}` : TVMAZE_API + `shows?page=${page - 1}`);
        setData(response);
        // console.log(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [query, page]);

  const handleChange = (query) => {
    setQuery(query);
    // console.log(query); test debounced query (200ms)
  }
  const handlePageChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <Navbar onChange={handleChange} />
      <Routes>
        <Route path='/' element={<Movies data={data} page={page} onChange={handlePageChange} onLoading={loading} />} />
        <Route path='/people' element={<People />} />
        <Route path='/networks' element={<Networks />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
