import { CardActionArea, CardContent, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { StyledCard } from "./StyledCard";
export function LoadingCard() {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={200} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={200} />
      </Box>
    </StyledCard>
  );
}
