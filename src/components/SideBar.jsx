import React from "react";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, styled, Tooltip, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { BarChartOutlined, CalendarTodayOutlined, HelpOutlineOutlined, MapOutlined, PersonOutlineOutlined, PieChartOutlineOutlined, TimelineOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from '@mui/material/colors';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
        {
            props: ({ open }) => open,
            style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
        ],
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Arry1 = [
    {"text" : "Dashboard", "icon": <HomeOutlinedIcon />, "path":"/dashboard"},
    {"text" : "Manage Team", "icon": <GroupOutlinedIcon />, "path":"/team"},
    {"text" : "Contacts Information", "icon": <ContactsOutlinedIcon />, "path":"/contacts"},
    {"text" : "Invoices Information", "icon": <ReceiptOutlinedIcon />, "path":"/receipt"}
]


const Arry2 = [
    {"text" : "Profile Form", "icon" : <PersonOutlineOutlined />, "path" :"/Person"},
    {"text" : "Calendar", "icon" : <CalendarTodayOutlined />, "path" :"/calendar"},
    {"text" : "FAQ Page", "icon" : <HelpOutlineOutlined />, "path" :"/help"}
]

const Arry3 = [
    {"text" : "Bar Chart", "icon" : <BarChartOutlined />, "path" :"/barchar"},
    {"text" : "Pie Chart", "icon" : <PieChartOutlineOutlined />, "path" :"/pieChart"},
    {"text" : "Line Chart", "icon" : <TimelineOutlined />, "path" :"/timeline"},
    {"text" : "Geography Chart", "icon" : <MapOutlined />, "path" :"/map"}
]



const SideBar = ({open, handleDrawerClose}) => {
    let location = useLocation();
    let navigate = useNavigate();
    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>

            <Divider />

            <Avatar 
            sx={{
                mx: "auto" ,
                my:1,
                width: open ? 88 : 44,
                height: open ? 88 : 44,
                border: "2px solid gray",
                transition:"0.30s"
            }}
            alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Typography align="center"  sx={{fontSize : open? 17 : 0, transition:"0.30s"}}>
            Tia Kamel
            </Typography>
            <Typography align="center" sx={{fontSize : open? 15 : 0, transition:"0.30s", mb:1, color: theme.palette.info.main }}>
            Admin
            </Typography>


            <Divider />

            <List>
            {Arry1.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                
                <Tooltip title={open? null : item.text} placement="right">
                <ListItemButton
                onClick={()=> {
                    navigate(item.path)
                }}
                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                        bgcolor: location.pathname === item.path? theme.palette.mode === "dark"? grey[800] :grey[300] : null
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>

                </Tooltip>
                
                
                
                </ListItem>
            ))}
            </List>
            <Divider />

            <List>
            {Arry2.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                
                <Tooltip title= {open? null : item.text} placement="right">
                <ListItemButton
                onClick={()=> {
                    navigate(item.path)
                }}
                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                        bgcolor: location.pathname === item.path? theme.palette.mode === "dark"? grey[800] :grey[300] : null
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>

                </Tooltip>
                
                
                
                
                </ListItem>
            ))}
            </List>

            <Divider />

            <List>
            {Arry3.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                
                <Tooltip title= {open? null : item.text} placement="right">
                <ListItemButton
                onClick={()=> {
                    navigate(item.path)
                }}
                    sx={[
                    {
                        minHeight: 48,
                        px: 2.5,
                        bgcolor: location.pathname === item.path? theme.palette.mode === "dark"? grey[800] :grey[300] : null
                    },
                    open
                        ? {
                            justifyContent: 'initial',
                        }
                        : {
                            justifyContent: 'center',
                        },
                    ]}
                >
                    <ListItemIcon
                    sx={[
                        {
                        minWidth: 0,
                        justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                            }
                        : {
                            mr: 'auto',
                            },
                    ]}
                    >
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    primary={item.text}
                    sx={[
                        open
                        ? {
                            opacity: 1,
                            }
                        : {
                            opacity: 0,
                            },
                    ]}
                    />
                </ListItemButton>

                </Tooltip>
                
                
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
}

export default SideBar;