import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Rating,
  Card,
  Collapse,
  useTheme,
} from "@mui/material";
import { useState } from "react";


const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.5rem",
        
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 18 }}
          color={theme.palette.secondary[500]}
          // gatterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See more
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.secondary[300],
          }}
        >
          <CardContent>
            <Typography>id: {_id}</Typography>
            <Typography>id: {stat[0].productId}</Typography>
            <Typography>Supply Left: {supply}</Typography>
            <Typography>
              Yearly sales this year: {stat[0].yearlySalesTotal}
            </Typography>
            <Typography>
              Yearly units sold this year: {stat[0].yearlyTotalSoldUnits}
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Product;
