import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import OptionMenu from "./OptionMenu";
import { useNavigate } from "react-router-dom";
import NotificationView from "../Notification/NotificationView";
import CartWidgetView from "../CartWidget/CartWidgetView";
// import UserView from "../User/UserView";
import MenuDrawer from "./MenuDrawer";
import Login from "../Login/Login";

const NavbarRender = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", zIndex: 1, marginBottom: 10 }}>
      <AppBar color="secondary">
        <Toolbar>
          <MenuDrawer />
          <Logo />
          <OptionMenu />
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              alignItems: "center",
            }}
          >
            <MenuItem onClick={() => handleNavigate("/notificaciones")}>
              <NotificationView color="inherit" />
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/cart")}>
              <CartWidgetView color="inherit" />
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/login")}>
              <Login color="inherit" />
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarRender;
