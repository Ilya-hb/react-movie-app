import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Input from "./Input";
import RM_white_string from "../assets/RM_white_string.svg";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export default function Navbar({ onChange, peoplePage }) {
  const handleChange = (e) => {
    onChange(e?.target?.value);
  };
  const debouncedOnChange = debounce(handleChange, 400);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavLink to="/" className={setActive}>
          <img
            src={RM_white_string}
            width="200px"
            alt="React movie logo"
            className="logo"
          />
        </NavLink>
        <Input onChange={debouncedOnChange} />
        <NavLink to="/" className={setActive}>
          Shows
        </NavLink>
        <NavLink to={`/people?page=${peoplePage}`} className={setActive}>
          People
        </NavLink>
        <NavLink to="/networks" className={setActive}>
          Networks
        </NavLink>
        
      </Toolbar>
    </AppBar>
  );
}