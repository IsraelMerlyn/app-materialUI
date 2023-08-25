/* eslint-disable no-undef */

import "./App.css";

import { AppTheme } from "./theme/AppTheme";
// import { MaterialUI } from "./MaterialUI";

import { CssBaseline } from "@mui/material";
import { MaterialUI } from "./MaterialUI";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <>
      <AppTheme>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
          <CssBaseline />
          <MaterialUI />
        </SnackbarProvider>
      </AppTheme>
    </>
  );
}

export default App;
