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

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation Logic
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required.";
    if (!emailRegex.test(formData.email)) tempErrors.email = "Email is not valid.";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing again
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     setSuccess(true);
  //     console.log("Registered Successfully:", formData);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/register", {
      name: formData.fullName, // Mapping React 'fullName' to Backend 'name'
      email: formData.email,
      password: formData.password
    });

    // If successful, go to login
    alert(response.data.message);
    navigate("/");

  } catch (err) {
    // Show error message from backend (e.g., "Email already exists")
    alert(err.response?.data?.message || "Registration failed");
  }
};

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fce4ec", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
      <Grid container sx={{ maxWidth: "1100px", minHeight: "700px", borderRadius: "30px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", backgroundColor: "#fff" }}>
        
        {/* LEFT PANEL (Consistent Brand Image) */}
        <Grid item xs={12} md={7.5} sx={{ background: "linear-gradient(135deg, #a00045 0%, #d81b60 100%)", p: 6, display: "flex", flexDirection: "column" }}>
          <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontWeight: 600, mb: 2 }}>
            Join Our Community
          </Typography>
          <Typography sx={{ color: "#fff", opacity: 0.9, mb: 4, maxWidth: "400px" }}>
            Create an account to track your progress, connect with experts, and access our full suite of wellness tools.
          </Typography>
          
          <Box component="img" src="/images/loginpage.png" sx={{ width: "280px", margin: "auto", display: { xs: "none", md: "block" } }} />

          {/* Feature highlights */}
          <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "24px", p: 2, display: "flex", justifyContent: "space-around", textAlign: "center", mt: 4 }}>
             <Typography variant="caption" sx={{ color: "#a00045", fontWeight: "bold" }}>AI Powered Tools</Typography>
             <Divider orientation="vertical" flexItem />
             <Typography variant="caption" sx={{ color: "#a00045", fontWeight: "bold" }}>Verified Therapists</Typography>
             <Divider orientation="vertical" flexItem />
             <Typography variant="caption" sx={{ color: "#a00045", fontWeight: "bold" }}>24/7 Peer Support</Typography>
          </Box>
        </Grid>

        {/* RIGHT PANEL (Register Form) */}
        <Grid item xs={12} md={4.5} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 5 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: "340px" }}>
            <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", color: "#700030", mb: 3, textAlign: "center" }}>
              Register
            </Typography>

            {success && <Alert severity="success" sx={{ mb: 2 }}>Account created successfully!</Alert>}

            {/* Name Field */}
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              variant="standard"
              error={!!errors.fullName}
              helperText={errors.fullName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              variant="standard"
              error={!!errors.email}
              helperText={errors.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="standard"
              error={!!errors.password}
              helperText={errors.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="standard"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              onChange={handleChange}
              sx={{ mb: 4 }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#9e003f", py: 1.5, borderRadius: "12px", textTransform: "none", fontSize: "1rem", "&:hover": { backgroundColor: "#800033" } }}
            >
              Create Account
            </Button>

            <Typography textAlign="center" sx={{ mt: 3, color: "#777", fontSize: "0.9rem" }}>
              Already have an account?{" "}
              <Box component="span" onClick={()=> {navigate("/")}} sx={{ color: "#9e003f", fontWeight: "bold", cursor: "pointer" }}>
                Login
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;