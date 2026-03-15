import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

const Sidebar = () => {

  const navigate = useNavigate();

  return (

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": { width: drawerWidth }
      }}
    >

      <Toolbar />

      <List>

        <ListItem button onClick={()=>navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={()=>navigate("/chat")}>
          <ListItemText primary="AI Chatbot" />
        </ListItem>

        <ListItem button onClick={()=>navigate("/volunteers")}>
          <ListItemText primary="Volunteers" />
        </ListItem>

        <ListItem button onClick={()=>navigate("/therapists")}>
          <ListItemText primary="Therapists" />
        </ListItem>

      </List>

    </Drawer>

  );
};

export default Sidebar;