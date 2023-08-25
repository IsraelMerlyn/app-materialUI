/* eslint-disable no-unused-vars */
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Snackbar,
} from "@mui/material";
import { useState } from "react";

export const SnackbarA = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>SnackbarA</div>
      <Container sx={{ mt: 5 }}>
        <Box sx={{ display: "grid", gap: "1rem" }}>
          {/* <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert> */}
          <Button variant="contained" onClick={() => setOpen(true)}>
            open snackbar
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Alert
              severity="error"
              //   onClose={() => {
              //     setOpen(false);
              //   }}
            >
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
};
