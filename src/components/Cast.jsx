import { useEffect, useState } from "react";
import axios from "axios";
import { NO_IMAGE_URL, TVMAZE_API } from "../api";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";

export default function Cast({ id }) {
  const [loading, setLoading] = useState(false);
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          TVMAZE_API + `shows/${id}/cast`
        );
        console.log(response);
        setCastData(response);
        // console.log(resp);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{ mt: "0" }}
    >
      {castData.map((el) => {
        return (
          <Grid item xs={3} id={el.character.id} key={el.character.id}>
            <Card>
              <CardMedia
                component="img"
                image={el.character?.image?.medium || NO_IMAGE_URL}
              />
              <CardContent>
                <Typography>{el.character.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
