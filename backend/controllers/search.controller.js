import { fetchFromTMDB } from "../services/tmdb.service.js";
import { User } from "../models/user.model.js";

export const searchPerson = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: "person",
          createdAt: Date.now(),
        },
      },
    });

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in searchPerson:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const searchMovie = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].title,
          searchType: "movie",
          createdAt: Date.now(),
        },
      },
    });

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in searchMovie:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const searchTvshow = async (req, res) => {
  const { query } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].name,
          searchType: "tvshow",
          createdAt: Date.now(),
        },
      },
    });

    return res.status(200).json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    console.log("Error in searchTvshow:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const searchHistory = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      content: req.user.searchHistory,
    });

  } catch (error) {
    console.log("Error in searchHistory:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const removeItemFromHistory = async (req, res) => {
    const { id } = req.params
    id = parseInt(id);
    try {
        
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                searchHistory: { id: id },
            },
        });

        res.status(200).json({
            success: true,
            message: "Item removed from history",
        });

    } catch (error) {
        
        console.log("Error in removeItemFromHistory:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });

    }
};