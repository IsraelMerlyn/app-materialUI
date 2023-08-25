import { Card, CardContent, Skeleton } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton variant="rectangular" height={250} />
        <CardContent>
          <Skeleton height={25} />
        </CardContent>
      </Card>
    </>
  );
};
