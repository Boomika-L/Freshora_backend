const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000,()=>{
  console.log("server running in Port 5000");
});
const userroutes = require("./Routers/UserRoutes")
const productroutes = require("./Routers/ProductRoutes");
const ProductRoutes = require(
  "./Routers/ProductRoutes"
);
const cartRoutes = require("./Routers/CartRoutes");
app.use("/api/user",userroutes);
app.use("/api/products",productroutes);
app.use(
  "/api/product",
  ProductRoutes
);
const profileRoutes =
require("./Routers/ProfileRoutes");

app.use(
"/api/profile",
profileRoutes
);
const adminRoutes =
require("./Routers/AdminRoutes");

app.use(
"/api/admin",
adminRoutes
);
const dashboardRoutes =
require("./Routers/DashboardRoutes");

app.use(
  "/api/dashboard",
  dashboardRoutes
);
const wishlistRoutes =
require("./Routers/WishlistRoutes");

app.use(
  "/api/wishlist",
  wishlistRoutes
);
const orderRoutes = require("./Routers/OrderRoutes");
const offerRoutes = require("./Routers/OfferRoutes");

app.use("/api/offers", offerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongodb connected successfully");
}
    ).catch((err)=>{
        console.log("mongodb connection failed");
    })


