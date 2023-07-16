import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import Sidebar from '../../components/Sidebar'
import {useTheme} from "@mui/material/styles";
import { useGetUserQuery } from "../../state/api";
const Layout = () => {
  
  const theme = useTheme();
  const isNonMobile = theme.breakpoints.up('sm');

  const [isSidebarOpen,SetIsSidebarOpen] = useState(true);
  const userId = useSelector((state)=> state.global.userId)
  const {data} = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%">
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
          user ={data || {}}
          isNonMobile={isNonMobile}
          isSidebarOpen={isSidebarOpen}
          SetIsSidebarOpen={SetIsSidebarOpen}
          drawerWidth="250px"
        />

          <Box flexGrow={1}>
          <NavBar
            user = {data || {}}
            isSidebarOpen={isSidebarOpen}
            SetIsSidebarOpen={SetIsSidebarOpen}
          />
          <Outlet width="100%" sx={{  }}/>
      </Box>
      </Box>
    </Box>
  );
};
export default Layout;
