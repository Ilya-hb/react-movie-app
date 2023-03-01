import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  tableCellClasses,
  styled,
  TableCell,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function MovieTable({ episodes }) {
  // console.log(episodes)
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">
              <Typography sx={{ fontWeight: "bold" }}>Number</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography sx={{ fontWeight: "bold" }}>Date</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography sx={{ fontWeight: "bold" }}>Score</Typography>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {episodes.map((el) => {
            return (
              <StyledTableRow key={el.id}>
                <StyledTableCell align="center">
                  <Typography>
                    {"Season " + el.season + " ep." + el.number}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>{el.airdate}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>{el.name}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography>
                    <StarIcon
                      sx={{ color: "#4EAEC8", fontSize: "25px", mx: "3px" }}
                    />{" "}
                    {el.rating.average}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
