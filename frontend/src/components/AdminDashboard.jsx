import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Grid
} from "@mui/material";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [tab, setTab] = useState(0);
  const [therapists, setTherapists] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  const fetchTherapists = async () => {
    const res = await axios.get("http://localhost:5000/api/pending-therapists");
    setTherapists(res.data);
  };

  const fetchVolunteers = async () => {
    const res = await axios.get("http://localhost:5000/api/pending-volunteers");
    setVolunteers(res.data);
  };

  useEffect(() => {
    fetchTherapists();
    fetchVolunteers();
  }, []);

  const approveTherapist = async (id) => {
    await axios.put(`http://localhost:5000/api/approve/${id}`);
    fetchTherapists();
  };

  const approveVolunteer = async (id) => {
    await axios.put(`http://localhost:5000/api/approve-volunteer/${id}`);
    fetchVolunteers();
  };

  return (
    <>
      <Navbar />

      <Box sx={{ p: 5 }}>
        <Typography
          sx={{
            fontSize: "40px",
            color: "#970747",
            textAlign: "center",
            mb: 4
          }}
        >
          Admin Verification Dashboard
        </Typography>

        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          centered
          sx={{ mb: 5 }}
        >
          <Tab label="Therapist Approval" />
          <Tab label="Volunteer Approval" />
        </Tabs>

        {tab === 0 && (
          <Grid container spacing={4}>
            {therapists.map((item) => (
              <Grid item xs={12} md={4} key={item._id}>
                <Card>
                  <CardContent>
                    <Typography sx={{ color: "#970747" }}>
                      {item.name}
                    </Typography>

                    <Typography>{item.email}</Typography>
                    <Typography>{item.specialization}</Typography>

                    <Button
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: "#970747",
                        color: "#fff"
                      }}
                      onClick={() => approveTherapist(item._id)}
                    >
                      Approve
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {tab === 1 && (
          <Grid container spacing={4}>
            {volunteers.map((item) => (
              <Grid item xs={12} md={4} key={item._id}>
                <Card>
                  <CardContent>
                    <Typography sx={{ color: "#970747" }}>
                      {item.name}
                    </Typography>

                    <Typography>{item.email}</Typography>

                    <Button
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: "#970747",
                        color: "#fff"
                      }}
                      onClick={() => approveVolunteer(item._id)}
                    >
                      Approve
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AdminDashboard;