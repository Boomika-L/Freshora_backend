const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/user", require("./Routers/UserRoutes"));
app.use("/api/products", require("./Routers/ProductRoutes"));
app.use("/api/product", require("./Routers/ProductRoutes"));
app.use("/api/profile", require("./Routers/ProfileRoutes"));
app.use("/api/admin", require("./Routers/AdminRoutes"));
app.use("/api/dashboard", require("./Routers/DashboardRoutes"));
app.use("/api/wishlist", require("./Routers/WishlistRoutes"));
app.use("/api/orders", require("./Routers/OrderRoutes"));
app.use("/api/offers", require("./Routers/OfferRoutes"));
app.use("/api/cart", require("./Routers/CartRoutes"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    console.log(err);
  });
