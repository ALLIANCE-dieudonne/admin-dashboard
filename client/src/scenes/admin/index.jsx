import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useGetAdminsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Admins = () => {
  const { data, isLoading } = useGetAdminsQuery();


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
  ];

  return (
    <Box m="1rem 2rem">
      <Header title="ADMINS" subtitle="List of all admins" />
      <Box mt="40px" height="75vh">
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
         
        />
      </Box>{" "}
    </Box>
  );
};
export default Admins;
