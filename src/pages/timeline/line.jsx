import React from "react";
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from "@mui/material";

const data = [
    {
        "id": "france",
        "data": [
        {
            "x": "plane",
            "y": 121
        },
        {
            "x": "helicopter",
            "y": 3
        },
        {
            "x": "boat",
            "y": 179
        },
        {
            "x": "train",
            "y": 95
        },
        {
            "x": "subway",
            "y": 264
        },
        {
            "x": "bus",
            "y": 196
        },
        {
            "x": "car",
            "y": 11
        },
        {
            "x": "moto",
            "y": 264
        },
        {
            "x": "bicycle",
            "y": 274
        },
        {
            "x": "horse",
            "y": 200
        },
        {
            "x": "skateboard",
            "y": 64
        },
        {
            "x": "others",
            "y": 267
        }
        ]
    },
    {
        "id": "us",
        "data": [
        {
            "x": "plane",
            "y": 33
        },
        {
            "x": "helicopter",
            "y": 183
        },
        {
            "x": "boat",
            "y": 269
        },
        {
            "x": "train",
            "y": 144
        },
        {
            "x": "subway",
            "y": 77
        },
        {
            "x": "bus",
            "y": 45
        },
        {
            "x": "car",
            "y": 153
        },
        {
            "x": "moto",
            "y": 296
        },
        {
            "x": "bicycle",
            "y": 143
        },
        {
            "x": "horse",
            "y": 157
        },
        {
            "x": "skateboard",
            "y": 24
        },
        {
            "x": "others",
            "y": 211
        }
        ]
    },
    {
        "id": "germany",
        "data": [
        {
            "x": "plane",
            "y": 290
        },
        {
            "x": "helicopter",
            "y": 94
        },
        {
            "x": "boat",
            "y": 107
        },
        {
            "x": "train",
            "y": 49
        },
        {
            "x": "subway",
            "y": 283
        },
        {
            "x": "bus",
            "y": 70
        },
        {
            "x": "car",
            "y": 250
        },
        {
            "x": "moto",
            "y": 114
        },
        {
            "x": "bicycle",
            "y": 20
        },
        {
            "x": "horse",
            "y": 278
        },
        {
            "x": "skateboard",
            "y": 255
        },
        {
            "x": "others",
            "y": 255
        }
        ]
    },
    {
        "id": "norway",
        "data": [
        {
            "x": "plane",
            "y": 193
        },
        {
            "x": "helicopter",
            "y": 16
        },
        {
            "x": "boat",
            "y": 128
        },
        {
            "x": "train",
            "y": 161
        },
        {
            "x": "subway",
            "y": 36
        },
        {
            "x": "bus",
            "y": 207
        },
        {
            "x": "car",
            "y": 216
        },
        {
            "x": "moto",
            "y": 42
        },
        {
            "x": "bicycle",
            "y": 125
        },
        {
            "x": "horse",
            "y": 243
        },
        {
            "x": "skateboard",
            "y": 194
        },
        {
            "x": "others",
            "y": 75
        }
        ]
    }
]



const Line = ({isDashboard = false})=> {
    const theme = useTheme()
    return (
        <Box sx={{height: isDashboard ? "280px" : "75vh"}}>
            <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        theme={
                {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "#ffffff"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.secondary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#dddddd",
                        "strokeWidth": 0
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "#ffffff"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "#ffffff"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    // @ts-ignore
                    "wrapper": {},
                    "container": {
                        "background": theme.palette.background.default,
                        "color": theme.palette.text.primary,
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            } }
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="catmullRom"
        axisBottom={{ legend: isDashboard? null :'transportation', legendOffset: 36 }}
        axisLeft={{ legend: isDashboard? null :'Count', legendOffset: -50 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
        </Box>
    )
}

export default Line;