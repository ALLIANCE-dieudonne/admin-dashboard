import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value
          ? params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3")
          : "";
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.4,
    },
  ];

  return (
    <Box sx={{ margin: "1rem 2rem" }}>
      <Header title="CUSTOMERS" subtitle="List of all customers" />

      <Box mt="40px" height="75vh">
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};
export default Customers;
