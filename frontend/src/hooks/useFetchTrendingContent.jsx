import React, { useEffect } from "react";
import useContentStore from "../store/content";
import axios from "axios";

function useFetchTrendingContent() {
  const [trendingContent, setTrendingContent] = React.useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContents = async () => {
      const response = await axios.get(`/api/v1/${contentType}/trending`);
      setTrendingContent(response.data.content);
    };

    getTrendingContents();
  }, [contentType]);

  return { trendingContent };
}

export default useFetchTrendingContent;
