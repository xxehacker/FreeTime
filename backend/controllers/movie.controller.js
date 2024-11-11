import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getThrendingMovie = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    return res.status(200).json({
      success: true,
      content: randomMovie,
    });
  } catch (error) {
    console.log("Error in getThrendingMovie:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getMovieTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(`
    https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);

    return res.status(200).json({
      success: true,
      trailers: data.results,
    });
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    console.log("Error in getMovieTrailers:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `
      https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );

    return res.status(200).json({
      success: true,
      details: data.results,
    });
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    console.log("Error in getMovieDetails:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSimilarMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `
      https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );

    return res.status(200).json({
      success: true,
      similarMovies: data.results,
    });
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    console.log("Error in similarMovies:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getMoviesByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );

    return res.status(200).json({
      success: true,
      moviesCategory: data.results,
    });
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    console.log("Error in getMoviesByCategory:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
