import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear errors as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (authError) setAuthError("");
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  axios
    .post("http://localhost:5000/api/login", formData)
    .then((response) => {

      console.log(response.data);

      alert(response.data.message);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Redirect
      navigate("/home");

    })
    .catch((error) => {
      console.log(error);
      alert(error.response?.data?.message || "Login failed");
    });
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fce4ec",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1100px",
          minHeight: "650px",
          borderRadius: "30px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          backgroundColor: "#fff"
        }}
      >
        {/* LEFT PANEL */}
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{
            background: "linear-gradient(135deg, #a00045 0%, #d81b60 100%)",
            p: { xs: 4, md: 6 },
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Box sx={{ color: "#fff", zIndex: 2, mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 3
              }}
            >
              Your Safe Space <br /> for Mental Wellness
            </Typography>
            <Typography sx={{ opacity: 0.9, maxWidth: "400px", mb: 2, fontSize: "1.05rem" }}>
              Our platform connects you with professional therapists, trained volunteers, and AI-powered support tools.
            </Typography>
          </Box>

          <Box
            component="img"
            src="/images/loginpage.png"
            sx={{
              width: "300px",
              margin: "0 auto",
              display: { xs: "none", md: "block" },
              zIndex: 1
            }}
          />

          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "24px",
              mt: "auto",
              p: 3,
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center"
            }}
          >
            {[
              { title: "1-on-1 Therapy", img: "/images/therapist.png" },
              { title: "AI-Powered Tools", img: "/images/aichatbot.png" },
              { title: "Peer Support", img: "/images/volunteer.png" }
            ].map((feature, index) => (
              <Box key={index} sx={{ width: "30%" }}>
                <Box component="img" src={feature.img} sx={{ width: 45, mb: 1 }} />
                <Typography variant="subtitle2" sx={{ color: "#a00045", fontWeight: "bold", fontSize: "0.8rem" }}>
                  {feature.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* RIGHT PANEL (Login Form) */}
        <Grid
          item
          xs={12}
          md={4.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 5,
            backgroundColor: "#fff"
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: "340px" }}>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#700030",
                mb: 5
              }}
            >
              Login
            </Typography>

            {authError && <Alert severity="error" sx={{ mb: 2 }}>{authError}</Alert>}

            <Typography sx={{ mb: 1, color: "#555", fontWeight: 500, fontSize: "0.9rem" }}>Email</Typography>
            <TextField
              fullWidth
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            />

            <Typography sx={{ mb: 1, color: "#555", fontWeight: 500, fontSize: "0.9rem" }}>Password</Typography>
            <TextField
              fullWidth
              name="password"
              type="password"
              placeholder="Min. 6 characters"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              sx={{ mb: 4, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#9e003f",
                py: 1.8,
                borderRadius: "12px",
                fontSize: "1.1rem",
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: "0 8px 20px rgba(158, 0, 63, 0.3)",
                "&:hover": { backgroundColor: "#800033" }
              }}
            >
              Sign In
            </Button>

            <Typography textAlign="center" sx={{ mt: 3, color: "#777", fontSize: "0.9rem" }}>
              New User?{" "}
              <Box component="span" sx={{ color: "#9e003f", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: 'underline' } }}
              onClick={() => navigate("/register")}>
                
                Register
              </Box>
            </Typography>

            <Typography textAlign="center" sx={{ mt: 3, color: "#777", fontSize: "0.9rem" }}>
              Login as Admin?{" "}
              <Box component="span" sx={{ color: "#9e003f", fontWeight: "bold", cursor: "pointer", "&:hover": { textDecoration: 'underline' } }}
              onClick={() => navigate("/admin")}>
                
                Admin
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;