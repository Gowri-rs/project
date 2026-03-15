import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardContent
} from "@mui/material";
import Navbar from "./Navbar";

const questions = [
  "How often do you feel stressed?",
  "Do you struggle to sleep?",
  "Do you feel lonely often?",
  "Do you find it difficult to focus?",
  "Do you feel emotionally overwhelmed?",
  "Do you need someone to talk to?",
  "Do you experience anxiety frequently?",
  "Do daily tasks feel exhausting?",
  "Do you feel isolated from others?",
  "Would guided emotional support help you?"
];


const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    setAnswers({
      ...answers,
      [`q${index + 1}`]: Number(value)
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/assessment", {
        userId: null ,
        answers
      });

      setResult(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>

    <Box sx={{ p: 5 }}>
      <Typography
        sx={{
          fontSize: "42px",
          color: "#970747",
          textAlign: "center",
          mb: 5
        }}
      >
        Mental Wellness Assessment
      </Typography>

      {questions.map((q, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography>{q}</Typography>

            <RadioGroup
              row
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <FormControlLabel value="1" control={<Radio />} label="Never" />
              <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
              <FormControlLabel value="3" control={<Radio />} label="Often" />
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#970747",
          mt: 3
        }}
      >
        Submit Assessment
      </Button>

      {result && (
  <Card
    sx={{
      mt: 5,
      p: 4,
      borderRadius: 3,
      backgroundColor: "#fff5fa",
      boxShadow: "0 8px 20px rgba(151,7,71,0.12)"
    }}
  >
    <Typography
      sx={{
        color: "#970747",
        fontSize: "28px",
        fontWeight: "bold"
      }}
    >
      Recommended Support
    </Typography>

    <Typography sx={{ mt: 2, fontSize: "22px" }}>
      {result.recommendation}
    </Typography>

    <Typography sx={{ mt: 1 }}>
      Score: {result.score}
    </Typography>

    <Typography sx={{ mt: 1 }}>
      Level: {result.level}
    </Typography>

    <Typography sx={{ mt: 3, color: "#666" }}>
      Continue with the recommended support or explore other options.
    </Typography>

    <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#970747",
          "&:hover": {
            backgroundColor: "#7d063b"
          }
        }}
        onClick={() => navigate("/recommended-support")}
      >
        Continue
      </Button>

      <Button
        variant="outlined"
        sx={{
          color: "#970747",
          borderColor: "#970747"
        }}
        onClick={() => navigate("/supportoptions")}
      >
        Explore Options
      </Button>
    </Box>
  </Card>
)}
    </Box>
    </>
  );
};

export default Assessment;