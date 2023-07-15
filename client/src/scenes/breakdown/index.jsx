import { Box } from "@mui/material";
import Header from "components/Header";
import BreakDownChart from "components/BreakDownChart";

const BreakDown = () => {
  return (
    <Box sx={{ margin: "1rem 2rem" }}>
      <Header title="BREAK DOWN" subtitle="Break down of sales by category" />
      <Box height="75vh" mt="40px">
        <BreakDownChart />
      </Box>
    </Box>
  );
};
export default BreakDown;
