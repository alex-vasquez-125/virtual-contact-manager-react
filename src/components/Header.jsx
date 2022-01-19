import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  function handleTableClick() {
    history.push("/table");
    closeMenu();
  }

  function handleCardClick() {
    history.push("/card");
    closeMenu();
  }

  function handleListClick() {
    history.push("/list");
    closeMenu();
  }

  function closeMenu() {
    setAnchorEl(false);
  }

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={handleTableClick}>Table</MenuItem>
            <MenuItem onClick={handleCardClick}>Card</MenuItem>
            <MenuItem onClick={handleListClick}>List</MenuItem>
          </Menu>
          <Typography>Virtual Contact Manager</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
