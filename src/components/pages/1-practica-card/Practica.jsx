/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import { Box, Button, Grid, Paper } from "@mui/material";

export const Practica = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden", //permanece dentro del marco agregado
          mt: 5,
        }}
      >
        <Img src="https://via.placeholder.com/200" alt="random" />
        <Box sx={{ flexGrow: 1 }}>
          <h2>Nombre del producto</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit</p>
          <Button variant="contained">Add cart</Button>
        </Box>
        <Box component="p" sx={{ mr: 2 }}>
          $19.99
        </Box>
      </Paper>
    </>
  );
};
