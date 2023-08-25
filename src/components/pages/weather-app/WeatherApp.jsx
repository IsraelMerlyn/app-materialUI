/* eslint-disable no-unused-vars */
// console.log(import.meta.env.VITE_API_KEY);

import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { API } from "./API";

export const WeatherApp = () => {
  const {
    onSubmit,
    city,
    setCity,
    loading,
    setLoading,
    weather,
    error,
    setError,
    setWeather,
  } = API();
  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Weather app
        </Typography>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="city"
            label="ciudad"
            variant="outlined"
            size="small"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="cargando ..."
          >
            Buscar
          </LoadingButton>
        </Box>
        {weather.city && (
          <Box
            sx={{
              mt: 2,
              display: "grid",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h2">
              {weather.city}, {weather.country}
            </Typography>
            <Box
              component="img"
              alt={weather.conditionText}
              src={weather.icon}
              sx={{ margin: "0 auto" }}
            />
            <Typography variant="h5" component="h3">
              {weather.temperature} °C
            </Typography>
            <Typography variant="h6" component="h4">
              {weather.conditionText}
            </Typography>
          </Box>
        )}
        <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
          Powered by:{" "}
          <a href="https://www.weatherapi.com/" title="Weather API">
            WeatherAPI.com
          </a>
        </Typography>
      </Container>
    </>
  );
};
