import express from "express";
import { getThrendingMovie , getMovieTrailers , getMovieDetails , getSimilarMovies , getMoviesByCategory } from "../controllers/movie.controller.js";


const router = express.Router();

router.get("/trending", getThrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);


export default router;