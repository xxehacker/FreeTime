import React, { useEffect, useRef, useState } from "react";
import useContentStore from "../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_LINK } from "../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ContentSlider({ category }) {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);
  console.log(content);
  const [showArrow, setShowArrow] = useState(false);

  const sliderRef = useRef(null);

  const formattedCategoryName =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  useEffect(() => {
    const getContent = async () => {
      const response = await axios.get(`/api/v1/${contentType}/${category}`);
      setContent(response.data.content);
    };
    getContent();
  }, [contentType, category]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="bg-black text-white relative px-5 md:px-20"
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      <h2 className="text-2xl font-bold py-5">
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide" ref={sliderRef}>
        {content.map((item) => (
          <Link
            to={`/watch/${item.id}`}
            key={item.id}
            className="min-w-[250px] relative group"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={SMALL_IMG_LINK + item.backdrop_path}
                alt={item.title || item.name}
                className="w-full h-full object-cover transition duration-500 transform ease-in-out group-hover:scale-125"
              />
            </div>
            <p className="mt-2 text-center font-semibold">
              {item.title || item.name} (
              {item.release_date?.split("-")[0] ||
                item.first_air_date.split("-")[0]}
              )
            </p>
          </Link>
        ))}
      </div>

      {showArrow && (
        <>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            "
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            "
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}

export default ContentSlider;
