import express from "express";
import {
  searchPerson,
  searchMovie,
  searchTvshow,
  searchHistory,
  removeItemFromHistory
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tvshow/:query", searchTvshow);
router.get("/searchHistory", searchHistory);
router.delete("/searchHistory/:id", removeItemFromHistory);

export default router;
