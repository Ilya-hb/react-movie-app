import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/system';
import People from './pages/People/People';
import Networks from './pages/Networks/Networks';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/people' element={<People />} />
        <Route path='/networks' element={<Networks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
