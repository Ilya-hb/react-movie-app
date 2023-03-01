import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { onChange, value } = props;
  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      label="Search"
      size="small"
      color="secondary"
      sx={{
        m: "0 20px",
      }}
    />
  );
}
