import express from "express";
const router = express.Router();
import { getThrendingTvshow , getTvshowTrailers , getTvshowDetails , getSimilarTvshows , getTvshowsByCategory } from "../controllers/tvshow.controller.js";




router.get("/trending", getThrendingTvshow);
router.get("/:id/trailers", getTvshowTrailers);
router.get("/:id/details", getTvshowDetails);
router.get("/:id/similar", getSimilarTvshows);
router.get("/:category", getTvshowsByCategory);


export default router;