/* eslint-disable no-unused-vars */
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const Formulario = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "Ingrese email valido",
  });

  const validarEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    // console.log(email);
    setError({
      error: false,
      message: "formato de email incorrecto",
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          sx={{ ml: 1, mt: 2 }}
          id="email"
          label="Email"
          type="email"
          //   required
          fullWidth
          helperText={error.message}
          error={error.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Registrar
        </Button>
      </Box>
    </>
  );
};
