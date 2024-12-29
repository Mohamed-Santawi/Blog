/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Card } from "./Card";
import { LoadingCard } from "./LoadingCard";

export function Workspace(props) {
  const { articles, loading, query } = props;
  if (!loading && !articles.length) {
    return (
      <Typography
        align="center"
        variant="h6"
        color="textSecondry"
        marginTop={4}
      >
        No Articles Found!
      </Typography>
    );
  }
  return (
    <div className="container mx-auto px-5 md:px-0 grid mt-8 justify-between gap-x-4 gap-y-4 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(3,minmax(0,_auto))]">
      {loading
        ? [...Array(6)].map((_, index) => <LoadingCard key={index} />)
        : articles.map((article) => (
            <Card key={JSON.stringify(article)} {...article} query={query} />
          ))}
    </div>
  );
}
