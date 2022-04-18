import {createTheme} from "@mui/material";
import {blue} from "@mui/material/colors";

export const THEME = createTheme({
    palette: {
        primary: blue,
    },
    components: {
        MuiList: {
            styleOverrides:{
                root:{
                    color: "white",
                    backgroundColor: '#42a5f5',
                    borderRadius: '10px',
                    width: "fit-content",
                },
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                }
            }
        },
    },

})