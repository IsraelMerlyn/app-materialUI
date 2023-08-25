import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { SnackbarA } from "./SnackbarA";
export const AlertSnackbars = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Box sx={{ display: "grid", gap: "1rem" }}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert
            severity="success"
            action={<Button color="inherit"> Delete</Button>}
          >
            This is a success alert — check it out!
          </Alert>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
          <Collapse in={open}>
            <Alert
              onClose={() => {
                setOpen(false);
              }}
            >
              This is a success alert — check it out! Hola
            </Alert>
          </Collapse>

          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            This is a success alert — check it out!
          </Alert>
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            This is a success alert — check it out!
          </Alert>
          <Alert icon={false} severity="success">
            This is a success alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert>

          <SnackbarA />
        </Box>
      </Container>
    </>
  );
};
