import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TVMAZE_API, NO_IMAGE_URL } from "../api";
import axios from "axios";
import { Container, Box } from "@mui/system";
import { CircularProgress, Typography, Grid, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import MovieTable from "../components/MovieTable";
import MovieGallery from "../components/MovieGallery";
// import BreadCrumb from '../components/BreadCrumb';
import Cast from "../components/Cast";

export default function Movie() {
  // console.log(movieData);
  const [movieData, setMovieData] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("Gallery");
  const params = useParams();
  console.log(params);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          TVMAZE_API + `shows/${params.id}`
        );
        const { data: resp } = await axios.get(
          TVMAZE_API + `shows/${params.id}/episodes`
        );
        // console.log(response);
        setEpisodes(resp);
        setMovieData(response);
        // console.log(resp);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const removeTags = (target) => {
    if (target) {
      return target.replace(/<\/?[^>]+(>|$)/g, "");
    } else {
      return;
    }
  };

  return (
    <>
      {/* <BreadCrumb /> */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt:'20px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Container maxWidth="xl" sx={{ margin: "20px 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 200, md: 200, lg: 270 },
                }}
                src={movieData?.image?.original || NO_IMAGE_URL}
                alt={movieData.name + " image"}
              />
              <Typography variant="h4" component="h2">
                Show Info
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {"Status: " + (movieData.status || "Unknown")}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {"Genres: " + (movieData.genres || "Unknown")}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {"Language: " + (movieData.language || "Unknown")}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {"Premiered: " + (movieData.premiered || "Unknown")}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography component="h1" variant="h4">
                {movieData.name}
              </Typography>
              <Typography component="p">
                {removeTags(movieData.summary)}
              </Typography>
              <Box sx={{ width: "100%", color: "black" }}>
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    centered
                    indicatorColor="secondary"
                  >
                    <Tab
                      label="Episodes"
                      sx={{ color: "black" }}
                      value="Episodes"
                    />
                    <Tab
                      label="Gallery"
                      sx={{ color: "black" }}
                      value="Gallery"
                    />
                    <Tab label="Cast" sx={{ color: "black" }} value="Cast" />
                  </TabList>
                  <TabPanel value="Episodes">
                    <MovieTable episodes={episodes} />
                  </TabPanel>
                  <TabPanel value="Gallery">
                    <MovieGallery id={movieData.id} />
                  </TabPanel>
                  <TabPanel value="Cast">
                    <Cast id={movieData.id} />
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
