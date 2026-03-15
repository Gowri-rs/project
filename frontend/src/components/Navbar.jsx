import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#970747",
        borderBottom: "1px solid #f2d7e3"
      }}
    >
      <Toolbar sx={{ px: 6 }}>
        <Typography
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontSize: "22px"
          }}
        >
          Mental Wellness
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{ color: "#970747" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/assessment"
            sx={{ color: "#970747" }}
          >
            Assessment
          </Button>

          <Button
            component={Link}
            to="/chat"
            sx={{ color: "#970747" }}
          >
            AI Support
          </Button>

          <Button
            component={Link}
            to="/therapists"
            sx={{ color: "#970747" }}
          >
            Therapists
          </Button>

          <Button
            component={Link}
            to="/admin"
            sx={{ color: "#970747" }}
          >
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;