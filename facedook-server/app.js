const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const app = express();

// cors
const corsOptions = require("./config/cors.js");
app.use(corsOptions);

// tools
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

app.use(helmet());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// auth
const { checkUser, requireAuth } = require("./middlewares/auth.middleware");

// routes
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

// get img
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
	res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);


// app.get('/', function (req, res) {
//     res.send("Server working...");
// });

module.exports = app; 
