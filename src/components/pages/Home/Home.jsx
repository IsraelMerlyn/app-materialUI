import { Alert, AlertTitle, Box, Button, Container } from "@mui/material";
import { useSnackbarPer } from "../useSnackbarPer";
import { Formulario } from "../Formulario";
import { GridC } from "../Grid/GridC";
import { Link, Route, Routes } from "react-router-dom";
import { SkeletonApp } from "../Skeleton-app/SkeletonApp";
import { WeatherApp } from "../weather-app/WeatherApp";
// import AndroidIcon from "@material-ui/icons/Android";
export const Home = () => {
  const { handleClick, handleClick2 } = useSnackbarPer();

  return (
    <>
      <Routes>
        <Route path="/skeleton" element={<SkeletonApp />} />
        <Route path="/clima" element={<WeatherApp />} />
      </Routes>
      <Container sx={{ mt: 5 }}>
        <Box sx={{ display: "grid", gap: "1rem" }}>
          <h1>Home</h1>
          <Button
            sx={{ ml: 2 }}
            variant="contained"
            onClick={() => handleClick()}
          >
            Open
          </Button>
          <Button
            sx={{ ml: 1 }}
            variant="contained"
            onClick={() => handleClick2()}
          >
            Open 2
          </Button>
          <Formulario />
          <GridC />
          <Alert
            severity="success"
            action={
              <Link to="/skeleton" color="inherit">
                App
              </Link>
            }
          >
            {/* <AndroidIcon /> */}
            <AlertTitle>App Ricky y Morty</AlertTitle>
          </Alert>
          <Link variant="contained" to="/skeleton">
            App ricky y Morty
          </Link>
          <Link component="Button" variant="contained" to="/clima">
            App Clima
          </Link>
        </Box>
      </Container>
    </>
  );
};
