const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const userRoutes = require("./routes/userRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const therapistRoutes = require("./routes/therapistRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const assessmentRoutes = require("./routes/assessmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const aiChatRoutes = require("./routes/aiChatRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", volunteerRoutes);
app.use("/api", therapistRoutes);
app.use("/api", sessionRoutes);
app.use("/api", assessmentRoutes);
app.use("/api", chatRoutes);
app.use("/api", aiChatRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});