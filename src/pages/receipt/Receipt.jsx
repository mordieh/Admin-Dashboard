import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Header } from "../../components/Header";


const Receipt = ()=> {
    return (
        <Box sx={{ height: 600, mx: "auto" }}>
        <Header title={"INVOICES"} subTitle={"List of Invoices Balances"} />

        <DataGrid
        checkboxSelection
        rows={rows}

        // @ts-ignore
        columns={columns}   
        />
    </Box>
    )
};

export default Receipt