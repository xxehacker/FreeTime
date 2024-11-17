import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useContentStore from "../store/content";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";
import { ORIGINAL_IMG_LINK, SMALL_IMG_LINK } from "../utils/constants";
import RetroGrid from "../components/ui/retro-grid";
import Footer from "@/components/Footer";

function WatchPage() {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [similar, setSimilar] = useState({});
  const [details, setDetails] = useState({});
  const [correntTrailerIndex, setCorrentTrailerIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const { contentType } = useContentStore();
  const sliderRef = useRef(null);

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/trailers`
        );
        setTrailers(response.data.content);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.includes("404")) {
          setTrailers([]);
          setLoading(false);
        }
      }
    };
    getTrailers();
  }, [contentType, id]);

  useEffect(() => {
    const getSimilar = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/similar`
        );
        setSimilar(response.data.content);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.includes("404")) {
          setSimilar([]);
          setLoading(false);
        }
      }
    };
    getSimilar();
  }, [contentType, id]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/details`
        );
        setDetails(response.data.content);
        setLoading(false);
      } catch (error) {
        console.log(error);
        if (error.response.includes("404")) {
          setDetails(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [contentType, id]);

  const handleNextTrailer = () => {
    if (correntTrailerIndex < trailers.length - 1)
      setCorrentTrailerIndex(correntTrailerIndex + 1);
  };
  const handlePrevTrailer = () => {
    if (correntTrailerIndex > 0)
      setCorrentTrailerIndex(correntTrailerIndex - 1);
  };
  const scrollLeft = () => {
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
  };
  const scrollRight = () => {
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
  };

  if (loading)
    return (
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Loading
        </span>

        <RetroGrid />
      </div>
    );

  if (!details) {
    return (
      <div className="bg-black text-white h-screen">
        <div className="max-w-6xl mx-auto">
          <Navbar />
          <div className="text-center mx-auto px-4 py-8 h-full mt-40">
            <h2 className="text-2xl sm:text-5xl font-bold text-balance">
              Content not found 😥
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-black text-white">
      <div className="max-auto container px-4 py-8 h-hull">
        <Navbar />

        {/* trailer section */}
        <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
          <div className="flex justify-between items-center mb-4">
            <button
              className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                correntTrailerIndex === 0
                  ? "opacity-50 cursor-not-allowed "
                  : ""
              }}
							`}
              disabled={correntTrailerIndex === 0}
              onClick={handlePrevTrailer}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className={`
							bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                correntTrailerIndex === trailers.length - 1
                  ? "opacity-50 cursor-not-allowed "
                  : ""
              }}
							`}
              disabled={correntTrailerIndex === trailers.length - 1}
              onClick={handleNextTrailer}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          {trailers.length > 0 && (
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              className="mx-auto overflow-hidden rounded-lg"
              url={`https://www.youtube.com/watch?v=${trailers[correntTrailerIndex].key}`}
            />
          )}

          {trailers?.length === 0 && (
            <h2 className="text-xl text-center mt-5">
              No trailers available for{" "}
              <span className="font-bold text-red-600">
                {details?.title || details?.name}
              </span>{" "}
              😥
            </h2>
          )}
        </div>

        {/* movie details */}

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-20 
				max-w-6xl mx-auto"
        >
          <div className="mb-4 md:mb-0">
            <h2 className="text-5xl font-bold text-balance">
              {details?.title || details?.name}
            </h2>

            <p className="mt-2 text-lg">
              {details?.release_date || details?.first_air_date} |{" "}
              {details?.adult ? (
                <span className="text-red-600">18+</span>
              ) : (
                <span className="text-green-600">PG-13</span>
              )}{" "}
            </p>
            <p className="mt-4 text-lg">{details?.overview}</p>
          </div>
          <img
            src={ORIGINAL_IMG_LINK + details?.poster_path}
            alt="Poster image"
            className="max-h-[600px] rounded-md"
          />
        </div>

        {similar.length > 0 && (
          <div className="mt-12 max-w-5xl mx-auto relative">
            <h3 className="text-3xl font-bold mb-4">Similar Movies/Tv Show</h3>

            <div
              className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4 group"
              ref={sliderRef}
            >
              {similar.map((content) => {
                if (content.poster_path === null) return null;
                return (
                  <Link
                    key={content.id}
                    to={`/watch/${content.id}`}
                    className="w-52 flex-none"
                  >
                    <img
                      src={SMALL_IMG_LINK + content.poster_path}
                      alt="Poster path"
                      className="w-full h-auto rounded-md"
                    />
                    <h4 className="mt-2 text-lg font-semibold">
                      {content.title || content.name}
                    </h4>
                  </Link>
                );
              })}

              <ChevronRight
                className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8
										opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer
										 bg-red-600 text-white rounded-full"
                onClick={scrollRight}
              />
              <ChevronLeft
                className="absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8 opacity-0 
								group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 
								text-white rounded-full"
                onClick={scrollLeft}
              />
            </div>
          </div>
        )}
      </div>
    </div>

    <Footer />
    </>
  );
}

export default WatchPage;
