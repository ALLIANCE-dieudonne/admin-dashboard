import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetProductsQuery } from "../../state/api";
import Header from "../../components/Header";
import Product from "./product";

const Products = () => {
  const theme = useTheme();
  const { data } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Box sx={{ margin: "1.5rem 2rem" }}>
      <Header title="PRODUCTS" subtitle=" List of all products" />
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4 , minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.3%"
          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          {/* {console.log("this is the data"+data)} */}
          {data &&
            data.map(
              ({
                _id,
                name,
                description,
                price,
                rating,
                category,
                supply,
                stat,
              }) => (
                <Product
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat}
                />
              )
            )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};
export default Products;
