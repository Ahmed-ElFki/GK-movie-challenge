import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MoviesList() {
  const moviesArray = useSelector((state) => state.movies);
  return (
    <Container>
      <Row>
        {moviesArray.map((movie) => (
          <MovieCard
            id={movie._id}
            title={movie.title}
            rate={movie.rate}
            date={movie.date}
            imgUrl={movie.imgUrl}
            description={movie.description}
            category={movie.category}
          />
        ))}
      </Row>
    </Container>
  );
}

export default MoviesList;
