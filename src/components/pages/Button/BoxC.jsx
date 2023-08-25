import { Box, Typography } from "@mui/material"

export const BoxC = () => {
  return (
    <>
      <Box
        maxWidth="sm"
       
        sx={{
          width: 300,
          alignItems: "center",
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography textAlign="center">Hola Box</Typography>
      </Box>
    </>
  );
}
