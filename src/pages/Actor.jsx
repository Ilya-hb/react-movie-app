import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TVMAZE_API } from "../api";
import {
  Typography,
  Grid,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { NO_IMAGE_URL } from "../api";

export default function Actor() {
  const [actor, setActor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("Main");
  const [castcredits, setCastcredits] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          TVMAZE_API + `people/${params.id}`
        );
        const { data: resp } = await axios.get(
          TVMAZE_API + `people/${params.id}/castcredits`
        );
        console.log(resp);
        setActor(response);
        // console.log(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
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
                src={actor?.image?.original || NO_IMAGE_URL}
                alt={actor?.name + " image"}
              />
              <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {actor.name}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {actor.country?.name ? "Country: " + actor.country.name : ""}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem" }}>

              </Typography>
            </Grid>
            <Grid item xs={9}>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
