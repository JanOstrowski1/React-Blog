const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("connected to Mongo DB"))
    .catch((err) => console.log(err));


    app.use("/api/auth" , authRoute);
    app.use("/api/users" , userRoute);
    app.use("/api/posts" , postsRoute);
    app.use("/api/categories" , categoriesRoute);


app.listen("5000", () => {
        console.log("Backend is running.");
    }
);

