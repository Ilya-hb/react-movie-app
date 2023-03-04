import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import People from "./pages/People";
import Networks from "./pages/Networks";
import Movie from "./pages/Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { TVMAZE_API } from "./api";
import Actor from "./pages/Actor";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [peoplePage, setPeoplePage] = useState(1);
  const [query, setQuery] = useState("");
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    //For receiving movies data
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          query
            ? TVMAZE_API + `search/shows?q=${query}`
            : TVMAZE_API + `shows?page=${page - 1}`
        );
        setData(response.slice(0, 20));
        // console.log(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [query, page]);

  useEffect(() => {
    //for receiving people data
    // setLoading(true);
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          TVMAZE_API + `people?page=${peoplePage - 1}`
        );
        setPeopleData(response.slice(0, 20));
        console.log(response.slice(0,20));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // setLoading(false);
  }, [peoplePage]);

  const handleChange = (query) => {
    setQuery(query);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const handlePeoplePageChange = (newPage) => {
    setPeoplePage(newPage);
  };
  return (
    <>
      <Navbar onChange={handleChange} peoplePage={peoplePage}/>
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              data={data}
              page={page}
              onChange={handlePageChange}
              onLoading={loading}
            />
          }
        />
        <Route
          path={`/people`}
          element={
            <People
              data={peopleData}
              page={peoplePage}
              onChange={handlePeoplePageChange}
              onLoading={loading}
            />
          }
        />
        <Route path="/networks" element={<Networks />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
