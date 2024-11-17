import { fetchFromTMDB } from "../services/tmdb.service.js";

export const getThrendingTvshow = async (req, res) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    return res.status(200).json({
      success: true,
      content: randomMovie,
    });
  } catch (error) {
    console.log("Error in getTreandingTvshow:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getTvshowTrailers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(`
    https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in getTvshowTrailers:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getTvshowDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `
      https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );

    return res.status(200).json({
      success: true,
      content: data,
    });
  } catch (error) {
    console.log("Error in getTvshowDetails:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSimilarTvshows = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `
      https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`
    );

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in getSimilarTvshows:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getTvshowsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in getTvshowsByCategory:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
