// src/theme.js
import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
        ? {
            
            }
        : {
            
            }),
    },
});

export default getDesignTokens;

