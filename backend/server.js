import express from "express";
import { ENV_VARIABLES } from "./config/envVariables.js";
import { connectDB } from "./config/mongoconnect.js";
import cookieParser from "cookie-parser";
// import cors from "cors";
import path from "path";

const app = express();
const PORT = ENV_VARIABLES.PORT;
const __dirname = path.resolve();

// All Routes
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvshowRoutes from "./routes/tvshow.route.js";
import searchRoutes from "./routes/search.route.js";
import { protectRoute } from "./middleware/protectRoute.js";

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}


// app.use(cors({
//   origin: 'http://localhost:5173', // Allow requests from the frontend server
//   credentials: true,
// }));


// All Middlewares
app.use(express.json()); // for parsing JSON. its means that we can use req.body to get the data as JSON
// app.use(express.urlencoded({ extended: true })); // for parsing form data . its means that we can use req.body to get the form data.


app.use(cookieParser()); // for parsing cookies . its means that we can use req.cookies to get the cookies.
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tvshow", protectRoute, tvshowRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
