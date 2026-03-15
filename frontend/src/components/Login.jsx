import {
  Box,
  Grid,
  Typography,
  TextField,
  Button
} from "@mui/material";

const Login = () => {
  return (
    <Grid container sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>

         {/* Left Side Description */}
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      backgroundColor: "#970747",
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      textAlign: "center"
    }}
  >
    <Box
      component="img"
      src="public/images/meditationlong.jpeg"
      alt="mental wellness"
      sx={{
        width: "80%",
        maxWidth: 350,
        mb: 4,
        borderRadius: 3
      }}
    />

    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Your Safe Space for Mental Wellness
    </Typography>

    <Typography variant="body1" sx={{ maxWidth: 450, lineHeight: 1.8 }}>
      Our platform connects you with professional therapists, trained volunteers,
      and AI-powered support tools to help you manage stress, anxiety, and emotional wellbeing.
      We believe mental health support should be accessible, compassionate, and available anytime.
    </Typography>
  </Grid>


      {/* Right Form Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 8
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420 }}>

          <Typography
            sx={{
              fontSize: "48px",
              color: "#970747",
              fontFamily: "'Cormorant Garamond', serif",
              mb: 5
            }}
          >
            Login
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="standard"
            sx={{ mb: 4 }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="standard"
            sx={{ mb: 5 }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#970747",
              py: 1.5,
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#7d063b"
              }
            }}
          >
            Sign In
          </Button>
                 <Typography variant="body2">
          New User?{" "}
          <span style={{ color: "#970747", cursor: "pointer", fontWeight: "bold" }}>
            Register
          </span>
        </Typography>
        </Box>
        
      </Grid>
    </Grid>
  );
};

export default Login;