import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Pie } from "../../pages/pieChart/Pie";
import React from "react";
import Bar from "../../pages/barchar/bar";
import { Geo } from "../../pages/map/Geo";


export const Row3 = ()=> {
    const theme = useTheme()
    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
            <Paper sx={{flexGrow: 1, minWidh:"400px", width:"28%"}}>
                <Typography
                    color ={theme.palette.secondary.main}
                    sx={{padding:"30px 30px 0 30px"}}
                    variant="h6"
                    fontWeight="600"
                >
                    Campaing
                </Typography>

                <Pie isDashboard = {true}/>

                <Typography
                variant="h6" align="center" sx={{mt: "15px"}}
                >
                    $48,352 revenue generated
                </Typography>

                <Typography variant="body2" px={0.7} pb={3} align="center">
                    Includs extra misc expenditures and costs
                </Typography>
            </Paper>

            <Paper sx={{flexGrow: 1, minWidh:"400px", width:"32%"}}>
                <Typography
                    color ={theme.palette.secondary.main}
                    sx={{padding:"30px 30px 0 30px"}}
                    variant="h6"
                    fontWeight="600"
                >
                    Sales Quantity
                </Typography>

                <Bar isDashboard= {true}/>
            </Paper>
                
            <Paper sx={{flexGrow: 1, minWidh:"400px", width:"32%"}}>
                <Typography
                    color ={theme.palette.secondary.main}
                    sx={{padding:"30px 30px 0 30px"}}
                    variant="h6"
                    fontWeight="600"
                >
                    Geaography Based Traffic
                </Typography>

                <Geo isDashboard = {true} />
            </Paper>
        </Stack>
    )
}