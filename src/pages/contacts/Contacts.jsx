import React from "react";
import { Box } from "@mui/material";
import { DataGrid, Toolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import { Header } from "../../components/Header";


export default function Contacts() {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title={"CONTACTS"} subTitle={"List Contacts for Future Reference"} />

      <DataGrid
          showToolbar
      slots={{ toolbar: Toolbar }}

        rows={rows}
        // @ts-ignore
        columns={columns}
        
      />
    </Box>
  );
}

