import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

const therapists = [
  {
    name: "Dr. Ananya Nair",
    specialty: "Anxiety & Stress Management",
    experience: "8 Years Experience",
    image: "/images/therapist1.jpeg"
  },
  {
    name: "Dr. Meera Thomas",
    specialty: "Emotional Wellbeing",
    experience: "6 Years Experience",
    image: "/images/therapist2.jpeg"
  },
  {
    name: "Dr. Priya Menon",
    specialty: "Cognitive Therapy",
    experience: "10 Years Experience",
    image: "/images/therapist3.jpeg"
  }
];

const TherapistPage = () => {
  return (
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
        Professional Therapist Support
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#666",
          mb: 6
        }}
      >
        Connect with experienced professionals for guided support.
      </Typography>

      <Grid container spacing={4}>
        {therapists.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0 8px 24px rgba(151,7,71,0.10)",
                overflow: "hidden"
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover"
                }}
              />

              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: "#970747",
                    fontWeight: "bold"
                  }}
                >
                  {item.name}
                </Typography>

                <Typography sx={{ mt: 1, color: "#666" }}>
                  {item.specialty}
                </Typography>

                <Typography sx={{ mt: 1, color: "#666" }}>
                  {item.experience}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#970747",
                    "&:hover": {
                      backgroundColor: "#7d063b"
                    }
                  }}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TherapistPage;