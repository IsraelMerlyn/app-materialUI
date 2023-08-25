/* eslint-disable react/prop-types */
import {
  Box,
  // Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  // ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavbarListDrawe = ({ navLinks, NavLink, setOpen }) => {
  return (
    <>
      <Box sx={{ width: 250, bgcolor: "lightblue" }}>
        <nav>
          <List>
            {navLinks.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
};
