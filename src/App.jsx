import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import People from './pages/People/People';
import Networks from './pages/Networks/Networks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { MOVIES_PAGE_DATA } from './api';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [query, setQuery] = useState('');
  // const updateQuery = (e) => setQuery(e?.target?.value);
  // const debouncedOnChange = debounce(updateQuery, 200);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(MOVIES_PAGE_DATA);
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [setLoading, query]);

  const handleChange = (query) => {
    setQuery(query);
    // console.log(query); test debounced query (200ms)
  }

  return (
    <>
      <Navbar onChange={handleChange} />
      <Routes>
        <Route path='/' element={<Movies data={data} />} />
        <Route path='/people' element={<People />} />
        <Route path='/networks' element={<Networks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
