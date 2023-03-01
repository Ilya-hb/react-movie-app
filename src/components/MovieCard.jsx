import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NO_IMAGE_URL } from "../api";
import StarIcon from "@mui/icons-material/Star";

export default function MovieCard({ el }) {
  // console.log(el);
  return (
    <Grid item xs={3}>
      <Link to={`/movie/${el?.id || el?.show?.id}`} className="pagination-link">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={
                el.show?.image?.medium || el?.image?.medium || NO_IMAGE_URL
              }
              alt={el.show?.name}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="p">
                {el?.name || el?.show?.name}
              </Typography>
              <Typography variant="h5" component="span">
                <StarIcon
                  sx={{ color: "#4EAEC8", fontSize: "25px", mx: "3px" }}
                />
                {el.show?.rating?.average || el?.rating?.average}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
