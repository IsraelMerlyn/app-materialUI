import { Container, Grid, Typography } from "@mui/material";

export const GridC = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography alignContent="center"> Hola mundo</Typography>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              veniam consectetur tenetur iure consequuntur! Necessitatibus
              temporibus cum optio sequi expedita, laboriosam velit reiciendis
              culpa architecto enim fuga eligendi modi debitis!
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography alignContent="center"> Hola mundo</Typography>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              veniam consectetur tenetur iure consequuntur! Necessitatibus
              temporibus cum optio sequi expedita, laboriosam velit reiciendis
              culpa architecto enim fuga eligendi modi debitis!
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography alignContent="center"> Hola mundo</Typography>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              veniam consectetur tenetur iure consequuntur! Necessitatibus
              temporibus cum optio sequi expedita, laboriosam velit reiciendis
              culpa architecto enim fuga eligendi modi debitis!
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
