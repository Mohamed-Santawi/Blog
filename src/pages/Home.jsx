import { useEffect, useRef, useState } from "react";
import { Typography, Button } from "@mui/material";
import { debounce } from "lodash";
import { Header, Workspace } from "../components";
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
console.log(apiKey);
function Home() {
  const queryValue = useRef("technology");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const loadData = async (currentQuery) => {
    const query = currentQuery ?? queryValue.current;
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    if (data.status !== "ok") {
      console.error("Error fetching data:", data.message);
      return [];
    }
    return data.articles
      .filter(
        (article) =>
          article.title !== "[Removed]" &&
          article.description !== "[Removed]" &&
          article.urlToImage &&
          article.title &&
          article.author &&
          article.description
      )
      .map((article) => {
        const { author, description, publishedAt, title, urlToImage, url } =
          article;
        return {
          title,
          author,
          description:
            description.length > 70
              ? description.slice(0, 70) + "..."
              : description,
          publishedAt,
          image: urlToImage,
          url,
        };
      });
  };
  const fetachAndUpdateData = (currentQuery) => {
    setLoading(true);
    setError(null);
    loadData(currentQuery ?? queryValue.current)
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        setError(
          error.message || "Failed to fetch data. Please try again later."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debounceData = debounce(() => {
    fetachAndUpdateData();
  }, 1000);

  useEffect(() => {
    fetachAndUpdateData();
  }, []);
  const searchHandler = (newQuery) => {
    if (!newQuery) {
      queryValue.current = "technology";
      fetachAndUpdateData(); // Refetch data with default query
      return;
    }
    queryValue.current = newQuery.trim();
    debounceData();
  };
  const loadMoreHandler = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <>
      <Header onSearchChange={searchHandler} />
      {!error ? (
        <>
          <Workspace
            articles={articles.slice(0, visibleCount)}
            loading={loading}
            query={queryValue.current}
          />
          {articles.length > visibleCount && (
            <Button
              variant="contained"
              color="secondry"
              onClick={loadMoreHandler}
              disabled={loading}
              sx={{
                display: "block",
                margin: "30px auto", // Center the button
                border: "1px solid #696A754D", // Border color and size
                padding: "12px 20px", // Top and bottom padding 12px, right and left 20px
                borderRadius: "6px", // Border radius 6px
                fontSize: "16px", // Font size 16px
                color: "#696A75", // Text color
                textTransform: "none", // Keep the text as it is (no uppercase)
                "&:hover": {
                  borderColor: "#696A75", // Hover border color
                  backgroundColor: "transparent", // Hover background color
                },
              }}
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          )}
        </>
      ) : (
        <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default Home;
