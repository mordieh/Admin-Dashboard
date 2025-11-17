import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from "./world_countries";
import { data } from "./data";
import { Geo } from "./Geo";
import { Header } from "../../components/Header";




const Map = ()=> {
    const theme = useTheme()

    return (
        <Box>
            <Header title="Geography" subTitle="Simple Geography Chart" />

            <Geo />
        </Box>
    )
}

export default Map;