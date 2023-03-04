import {
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ActorCard from "../components/ActorCard";

export default function People({ data, onLoading, onChange, peoplePage }) {
  // console.log(data);
  const handlePeoplePageChange = (num) => {
    onChange(num);
  };
  return (
    <Container maxWidth="lg" sx={{ mt: "10px" }}>
      {onLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack>
          <Pagination
            size="large"
            sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
            color="primary"
            count={data.length}
            page={peoplePage}
            onChange={(_, num) => handlePeoplePageChange(num)}
            className="paginate"
            renderItem={(item) => (
              <PaginationItem
                color="primary"
                sx={{ color: "black" }}
                component={Link}
                to={`/people?page=${item.page}`}
                {...item}
              />
            )}
          />

          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ mt: "0" }}
          >
            {data.map((el) => {
              return <ActorCard el={el} key={el.id} />;
            })}
          </Grid>
        </Stack>
      )}
    </Container>
  );
}
