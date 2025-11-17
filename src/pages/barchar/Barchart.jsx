import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import { Header } from "../../components/Header";



const Barchart = ()=> {
    const theme = useTheme()
    return (
        <Box>
            <Header title={"Bar Chart"} subTitle={"Simple Bar Chart"} />
            <Bar />
        </Box>
    )
};

export default Barchart;