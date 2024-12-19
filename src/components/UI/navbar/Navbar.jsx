import { Box, Button, MenuItem, Select, Switch } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";
import { routes } from "../../AppRouter";

const Navbar = ({ toggleMode }) => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("");

  const handleChange = (event) => {
    setCurrentPage(event.target.value);
    navigate(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar_links">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            mr: 4,
          }}
        >
          <Select
            value={currentPage}
            onChange={handleChange}
            sx={{ mr: 4, minWidth: 120 }}
          >
            {/* <MenuItem disabled value="">
              <em>Projects</em>
            </MenuItem> */}
            {routes.map((route) => (
              <MenuItem key={route.path} value={route.path}>
                {route.label}
              </MenuItem>
            ))}
          </Select>
          <LightModeOutlinedIcon />
          <Switch onChange={toggleMode} sx={{ m: `0 8px` }} />
          <Brightness2RoundedIcon />
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
