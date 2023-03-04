import {
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function Movies({ data, page, onChange, onLoading }) {
  
  const handlePageChange = (num) => {
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
          {data.length !== 10 && (
            <Pagination
              size="large"
              sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
              color="primary"
              count={data.length}
              page={page}
              onChange={(_, num) => handlePageChange(num)}
              className="paginate"
              renderItem={(item) => (
                <PaginationItem
                  color="primary"
                  sx={{ color: "black" }}
                  component={Link}
                  to={`/?page=${item.page}`}
                  {...item}
                />
              )}
            />
          )}

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
              return <MovieCard el={el} key={el?.id || el?.show?.id} />;
            })}
          </Grid>
        </Stack>
      )}
    </Container>
  );
}
