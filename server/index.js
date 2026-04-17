import express from "express";
import dotenv from "dotenv";
import DBConnect from "./Database/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import DBconnect from "./Database/db";
import userRoute from "./routes/user.route.js";
const app = express();
dotenv.config({});

const port = process.env.PORT || 5000;

// Call Database Connection
DBConnect();
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "http://192.168.1.6:5173/",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// Route
app.use("/api/v1/user", userRoute);

app.get("/home", (_, res) => {
  res.status(200).json({
    success: true,
    message: " This is backend test API",
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/abcs", (req, res) => {
  console.log(req.body);
  res.send("Backend is running");
});

// app.get("/home",(_,res)=>{
//     res.status(200).json({
//         success: true,
//         message:" This is backend test API"
//     })
// })
app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
