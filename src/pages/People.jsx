import {
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import ActorCard from "../components/ActorCard";

export default function People({ data, onLoading }) {
  console.log(data);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "10px" }}>
        {onLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Stack spacing={2}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={{}}
            >
              {data.map((el) => {
                return <ActorCard el={el} key={el.id} />;
              })}
            </Grid>
          </Stack>
        )}
      </Container>
    </>
  );
}
