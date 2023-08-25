/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from "@mui/material";
import { CardApi } from "./CardApi";
import { CardSkeleton } from "./CardSkeleton";
import { useEffect, useState } from "react";

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const SkeletonApp = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" textAlign="center" mb={3}>
          Ryck and Morty
        </Typography>
        <Box sx={{ display: "grid", gap: 2, maxWidth: 250, mx: "auto" }}>
          {loading
            ? Array.from(new Array(3)).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : character.map((character) => (
                <CardApi
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              ))}
          {/* <CardApi />
          <CardSkeleton /> */}
        </Box>
      </Container>
    </>
  );
};
