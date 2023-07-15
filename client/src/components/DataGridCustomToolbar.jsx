import { Search } from "@mui/icons-material";

import {
  IconButton,
  TextField,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  const theme = useTheme();
  return (
    <div>
      <GridToolbarContainer>
        <FlexBetween width="100%">
          <FlexBetween>
            <GridToolbarColumnsButton
              sx={{ color: theme.palette.secondary[200] }}
            />
            <GridToolbarDensitySelector
              sx={{ color: theme.palette.secondary[200] }}
            />
            <GridToolbarExport sx={{ color: theme.palette.secondary[200] }} />
          </FlexBetween>
          <TextField
            label="Search..."
            sx={{ mb: "0.5rem", width: "15rem" }}
            value={searchInput}
            variant="standard"
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput("");
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FlexBetween>
      </GridToolbarContainer>
    </div>
  );
};
export default DataGridCustomToolbar;
