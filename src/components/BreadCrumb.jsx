import React from "react";
import { Breadcrumbs } from "@mui/material";
import { Link as NavLink } from "react-router-dom";

export default function BreadCrumb() {
  const handleClick = (e) => {
    e.preventDefault();
    console.info("You clicked");
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to="/" className="disabled-breadcrump">
          Home
        </NavLink>
        <NavLink to="/" className="disabled-breadcrump">
          Home2
        </NavLink>
        <NavLink to="/" className="disabled-breadcrump">
          Home3
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}
