/* eslint-disable react/prop-types */
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

export const CardApi = ({ name, image }) => {
  return (
    <>
      <Card>
        <CardMedia
          image={image}
          title={name}
          sx={{ height: 250, width: 250 }}
        />
        <CardContent>
          <Typography variant="h5">{name} </Typography>
        </CardContent>
      </Card>
    </>
  );
};
