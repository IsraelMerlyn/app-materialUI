import { useSnackbar } from "notistack";

export const useSnackbarPer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("isra", {
      variant: "success",
    });
  };
  const handleClick2 = () => {
    enqueueSnackbar("isra", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  return {
    handleClick,
    handleClick2,
  };
};
