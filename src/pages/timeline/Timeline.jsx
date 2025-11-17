import React from "react";
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from "@mui/material";
import Line from "./line";
import { Header } from "../../components/Header";



const Timeline = ()=> {
    const theme = useTheme()
    return (
        <Box>
            <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
            <Line />
        </Box>
    )
}

export default Timeline;