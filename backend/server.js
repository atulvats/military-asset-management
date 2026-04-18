// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/assets", require("./routes/assetRoutes"));
// app.use("/api/purchases", require("./routes/purchaseRoutes"));
// app.use("/api/transfers", require("./routes/transferRoutes"));
// app.use("/api/assignments", require("./routes/assignmentRoutes"));

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/assets", require("./routes/assetRoutes"));
app.use("/api/purchases", require("./routes/purchaseRoutes"));
app.use("/api/transfers", require("./routes/transferRoutes"));
app.use("/api/assignments", require("./routes/assignmentRoutes"));

app.listen(5000, () => {
  console.log("Server Started");
});