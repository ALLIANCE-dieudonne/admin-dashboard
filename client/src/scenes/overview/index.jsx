import { FormControl, Box, InputLabel, Select, MenuItem } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "../../components/overviewChart";
import { useState } from "react";
const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box m="1rem 2rem">
      <Header title="OVERVIEW" subtitle="Overview of all revenue and profit" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select value={view} onChange={e => setView(e.target.value)}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};
export default Overview;
