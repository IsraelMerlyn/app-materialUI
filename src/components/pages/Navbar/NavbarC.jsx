/* eslint-disable react/prop-types */
// import { NavbarListDrawe } from "./NavbarListDrawe";

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavbarListDrawe } from "./NavbarListDrawe";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
export const NavbarC = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                variant="contained"
                onClick={() => setOpen(true)}
                size="large"
                color="inherit"
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              IsraelMerlyn
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinks.map((item) => (
                <Button
                  component={NavLink}
                  to={item.path}
                  key={item.id}
                  color="inherit"
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{ display: { xs: "flex", sm: "none" } }}
          open={open}
          // open={open}
          anchor="left"
          onClose={() => setOpen(false)}
        >
          <NavbarListDrawe
            navLinks={navLinks}
            NavLink={NavLink}
            setOpen={setOpen}
          />
        </Drawer>
      </Container>
    </>
  );
};
