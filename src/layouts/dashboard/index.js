import React from "react";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const DashboardLayout = () => {
  return (
    <Stack direction={"row"} position={"absolute"} left="0px" bottom={"0"}>
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
