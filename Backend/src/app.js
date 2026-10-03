const express  = require("express")
const cookieParser = require("cookie-parser");






const app = express()
app.use(express.json());
app.use(cookieParser());
const cors = require("cors");


app.use(cors({
  origin:[
    "http://localhost:5173",
    "https://interview-preparation-theta-opal.vercel.app",
    "https://interview-preparation-i146iwm2y-pro-team-bf05.vercel.app"
  ],
  credentials: true
}));

// require all routes here
const authRouter = require("./routes/auth_routes")
const interviewRouter=require('./routes/interview.routs')


// using allthe routs here
app.use("/api/auth",authRouter)
app.use('/api/interview',interviewRouter)



module .exports = app