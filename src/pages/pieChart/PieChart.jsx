import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'
import { Pie } from "./Pie";
import { Header } from "../../components/Header";



const PieChart = ()=> {
    const theme = useTheme()
    return (
        <Box>
            <Header title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
            <Pie />
        </Box>
)
};

export default PieChart;