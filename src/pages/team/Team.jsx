import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";


import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined
} from "@mui/icons-material";


const Team = ()=> {
    const theme = useTheme();

    const columns = [
    { field: 'id', headerName: 'ID', width :40, headerAlign:"center", align: "center"},
    { field: 'name', headerName: 'Name', headerAlign:"center",flex: 1, align: "center"},
    { field: 'email', headerName: 'Email', flex : 1, headerAlign:"center", align: "center"},
    { field: 'age', headerName: 'Age', headerAlign:"center", align: "center"},
    { field: 'phone', headerName: 'Phone', flex : 1, headerAlign:"center", align: "center"},
    { field: 'access', headerName: 'Access', flex : 1, align: "center", headerAlign:"center",
        renderCell: ({row: {access}})=> {
            return(
                
                <Box sx={
                    {  
                        p: "5px",
                        borderRadius:"3px",
                        width: "99px",
                        textAlign: "center",
                        margin: "8px auto",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        backgroundColor: access === "Admin" ?
                        theme.palette.primary.dark : 
                        access === "Manager"? 
                        theme.palette.secondary.dark : "#3da58a"
                    }
                }>

                    
                    {access === "Admin" && (
                        <AdminPanelSettingsOutlined sx={{color:"#ffff"}} />
                    )}
                    {access === "Manager" && (
                        <SecurityOutlined sx={{color:"#ffff"}} />
                    )}
                    {access === "User" && (
                        <LockOpenOutlined sx={{color:"#ffff"}} />
                    )}
                    <Typography sx={{color:"#ffff"}}>{access}</Typography>
                </Box>
            )
        }
    }
    
];



    return (
        <Box sx={{ height: 600, mx: "auto"}}>
            <Header title={"Team"} subTitle={"Maning the Team Members"} />
            <DataGrid rows={rows} 
// @ts-ignore
            columns={columns} />
        </Box>
    )
};

export default Team ;