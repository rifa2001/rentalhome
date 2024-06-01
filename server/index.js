// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const cors = require("cors");

// const authRoutes = require("./routes/auth.js")
// const listingRoutes = require("./routes/listing.js")
// const bookingRoutes = require("./routes/booking.js")
// const userRoutes = require("./routes/user.js")

// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// /* ROUTES */
// app.use("/auth", authRoutes)
// app.use("/properties", listingRoutes)
// app.use("/bookings", bookingRoutes)
// app.use("/users", userRoutes)

// /* MONGOOSE SETUP */
// const PORT = 3001;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     dbName: "Nest_Flex",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//   })
//   .catch((err) => console.log(`${err} did not connect`));



const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/* MONGOOSE SETUP */
const PORT = 3001;

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Nest_Flex"
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
