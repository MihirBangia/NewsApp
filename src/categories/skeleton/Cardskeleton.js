import { Skeleton } from "@mui/material";



const CardSkeleton = () => {
  return (
    <>
 <Skeleton variant="rectangular" width={345} height={400} sx={{margin:2}} animation="wave" />
    </>
  );
};

export default CardSkeleton;
