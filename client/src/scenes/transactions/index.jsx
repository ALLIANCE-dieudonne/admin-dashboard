import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { useGetTransctionsQuery } from "state/api";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import Header from "components/Header";

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransctionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },

    {
      field: "products",
      headerName: "# of products",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <div>
      <Box sx={{ margin: "1rem 2rem" }}>
        <Header title="TRANSACTIONS" subtitle="List of entire transactions" />

        <Box
          mt="40px"
          height="75vh"
          sx={{ "& .MuiDataGrid-root": { border: "none" } }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
            rowCount={(data && data.total) || 0}
            rowsPerPageOptions={[20,50,100]}
            pagination
            page={page}
            pageSize={pageSize}
            paginationMode="server"
            sortingMode="server"
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onSortModelChange={(newSortModel) => setSort(...newSortModel)}
            components={{ Toolbar: DataGridCustomToolbar }}
            componentsProps={{
              toolbar: { searchInput, setSearchInput, setSearch },
            }}
          />
        </Box>
      </Box>
    </div>
  );
};
export default Transactions;
