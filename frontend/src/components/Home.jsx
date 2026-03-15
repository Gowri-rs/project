import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Card,
  CardContent
} from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useNavigate } from "react-router-dom";
import Assessment from "./Assessment";

const Home = () => {
  const navigate= useNavigate();
  const handleclick =()=>{
    navigate("/assessment")
  };
  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {/* Navbar */}
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
              fontSize: "20px"
            }}
          >
            Mental Wellness
          </Typography>

          <Button sx={{ color: "#970747" }}>Home</Button>
          <Button sx={{ color: "#970747" }}>About</Button>
          <Button sx={{ color: "#970747" }}>Services</Button>
          <Button sx={{ color: "#970747" }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={8} alignItems="center">

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "52px",
                color: "#970747",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                lineHeight: 1.2,
                mb: 3
              }}
            >
              A Place to Pause, Reflect and Heal
            </Typography>

            <Typography
              sx={{
                color: "#666",
                lineHeight: 2,
                mb: 4
              }}
            >
              Support for emotional wellbeing through AI guidance,
              volunteer listening, and professional care.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#970747",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#7d063b"
                }
              }}
              onClick={handleclick}
            >
              Begin Your Journey
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="public/images/meditation.jpeg"
              alt="therapy"
              sx={{
                width: "100%",
                height: 500,
                objectFit: "cover"
              }}
            />
          </Grid>

        </Grid>
      </Container>

      {/* Section 1 */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={10} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="public/images/aichatbot.jpeg"
              alt="support"
              sx={{
                width: "100%",
                height: 420,
                objectFit: "cover"
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "42px",
                color: "#970747",
                fontFamily: "'Cormorant Garamond', serif",
                mb: 3
              }}
            >
              Mental wellness begins with being heard
            </Typography>

            <Typography sx={{ color: "#666", lineHeight: 2 }}>
              Every person deserves a safe place where emotions
              are acknowledged without judgment.
            </Typography>
          </Grid>

        </Grid>
      </Container>

      {/* Section 2 */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={10} alignItems="center">

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "42px",
                color: "#970747",
                fontFamily: "'Cormorant Garamond', serif",
                mb: 3
              }}
            >
              Healing happens step by step
            </Typography>

            <Typography sx={{ color: "#666", lineHeight: 2 }}>
              Growth is built through small consistent support,
              reflection, and emotional resilience.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="public/images/therapist.jpeg"
              alt="growth"
              sx={{
                width: "100%",
                height: 420,
                objectFit: "cover"
              }}
            />
          </Grid>

        </Grid>
      </Container>

      {/* Feature Cards */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>

          {[
            {
              icon: <ChatIcon sx={{ fontSize: 55, color: "#970747" }} />,
              title: "AI Chat Support"
            },
            {
              icon: <VolunteerActivismIcon sx={{ fontSize: 55, color: "#970747" }} />,
              title: "Volunteer Support"
            },
            {
              icon: <PsychologyIcon sx={{ fontSize: 55, color: "#970747" }} />,
              title: "Professional Therapy"
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  border: "1px solid #f2d7e3",
                  boxShadow: "none",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 30px rgba(151,7,71,0.12)"
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  {item.icon}

                  <Typography sx={{ mt: 3, fontSize: "18px" }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#970747",
          color: "#fff",
          py: 6,
          textAlign: "center",
          mt: 8
        }}
      >
        <Typography sx={{ mb: 1 }}>
          Mental Wellness
        </Typography>

        <Typography sx={{ opacity: 0.8 }}>
          Safe support • Emotional growth • Professional care
        </Typography>
      </Box>

    </Box>
  );
};

export default Home;