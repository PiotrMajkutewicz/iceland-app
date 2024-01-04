import * as React from "react";
import Box from "@mui/material/Box";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PublicOutlined from "@mui/icons-material/PublicOutlined";
import LocalGasStationOutlined from "@mui/icons-material/LocalGasStationOutlined";
import { Link } from "react-router-dom";
import { isLinkSelected } from "services";

const drawerWidth = 240;

export default function ClippedDrawer({ appName = "App" }) {
  const listItems = [
    {
      name: "Licence Plates",
      icon: <InboxIcon />,
      to: "/licence-plates",
    },
    {
      name: "Earthquakes",
      icon: <PublicOutlined />,
      to: "/earthquakes",
    },
    {
      name: "Petrol",
      icon: <LocalGasStationOutlined />,
      to: "/petrol",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" noWrap component="div">
              {appName}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {listItems.map(({ name, icon, to }) => (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  LinkComponent={Link}
                  to={to}
                  selected={isLinkSelected(to)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
