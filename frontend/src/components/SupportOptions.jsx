import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SupportOptions = () => {
  const navigate = useNavigate();
  const supports = [
    {
      icon: <ChatIcon sx={{ fontSize: 55, color: "#970747" }} />,
      title: "AI Chat Support",
      description:
        "Instant emotional support through AI-guided conversation whenever needed."
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 55, color: "#970747" }} />,
      title: "Volunteer Support",
      description:
        "Connect with trained volunteers who listen with empathy and care."
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 55, color: "#970747" }} />,
      title: "Professional Therapy",
      description:
        "Receive structured support from qualified mental health professionals."
    }
  ];

  return (
    <>
    <Navbar/>
    
    <Box sx={{ px: 5, py: 8, backgroundColor: "#fff" }}>
      
      <Typography
        sx={{
          fontSize: "42px",
          color: "#970747",
          textAlign: "center",
          mb: 2,
          fontFamily: "'Cormorant Garamond', serif"
        }}
      >
        Explore Support Options
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#666",
          mb: 6
        }}
      >
        Choose the support that feels right for you.
      </Typography>

      <Grid container spacing={4}>
        {supports.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 8px 24px rgba(151,7,71,0.10)",
                textAlign: "center",
                p: 3,
                transition: "0.4s",
                "&:hover": {
                  transform: "translateY(-8px)"
                }
              }}
            >
              <CardContent>
                {item.icon}

                <Typography
                  sx={{
                    mt: 3,
                    fontSize: "22px",
                    color: "#970747",
                    fontWeight: "bold"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#666",
                    lineHeight: 1.8
                  }}
                >
                  {item.description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#970747",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#7d063b"
                    }
                  }}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default SupportOptions;