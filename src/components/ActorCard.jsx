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
//todo link to person
export default function ActorCard({el}) {
  console.log(el);
  return (
    <Grid item xs={3}>
      <Link to={`/actor/${el?.id || el?.person?.id}`} className="pagination-link">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              loading="lazy"
              alt={el.person?.name}
              image={el.image?.medium ||el?.person?.image?.medium|| NO_IMAGE_URL}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="p">
                {el?.name || el?.person?.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
