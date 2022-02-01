import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

// todo: figure out how to use history or location https://v5.reactrouter.com/web/api/Router
function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // todo: finish impl navigate and replace history
  // todo: figure out diff btw react router and react router dom and the migration from v5 to v6 in react router https://reactrouter.com/docs/en/v6/getting-started/overview
  function handleTableClick() {
    navigate("/table");
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
