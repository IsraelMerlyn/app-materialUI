import {  Button, Container, Typography } from "@mui/material"


export const ButtonC = () => {
  return (
    <>
      <Container
        maxWidth="sm"

        sx={{
            
          border: 3,
          boxShadow: 1,
          pb: 2,
        }}
      >
        
        <Typography alignContent="center"  mt={5} pb={5} textAlign="center" variant="h3">Botones</Typography>

        <Button sx={{ml:2}} variant="text">Text</Button>
        <Button sx={{ml:2}}  variant="contained">Contained</Button>
        <Button sx={{ml:2}} variant="outlined">Outlined</Button>
      </Container>
    </>
  );
}
