import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    RecieptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalenderMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendngUpOutlined,
    PieChartOutlined
} from "@mui/icons-material";
import { useEffect,useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.png";

const navItems = [
    {
      text: "Dashboard",
      icon:<HomeOutlined /> ,
      url: "employee/dashboard",
    },
    {
        text: "Client",
        icon:null,

    },
    {
        text: "Details",
        icon:<HomeOutlined /> ,
        url: "client",

    },
    {
        text: "Tasks",
        icon:<HomeOutlined /> 
    },
    {
        text: "Team",
        icon:null
    },
    {
        text: "Details",
        icon:<HomeOutlined />
    },
    {
        text: "Members",
        icon:<HomeOutlined />
    },
    {
        text: "Tasks",
        icon:<HomeOutlined />
    },
    {
        text: "Roles",
        icon:<HomeOutlined />
    },
    {
        text: "TimeSheet",
        icon:null
    },
    {
        text: "Daily",
        icon:<HomeOutlined />
    },
    {
        text: "Monthly",
        icon:<HomeOutlined />
    },
]

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const {pathname } = useLocation();
    const [active,setActive] = useState();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

  return <Box component="nav">
  {isSidebarOpen && (
    <Drawer 
    open={isSidebarOpen}
    onClose={()=> setIsSidebarOpen(false)}
    variant="persistent"
    anchor="left"
    sx={{
        width: drawerWidth, "& .MuiDrawer-paper":{
            color:theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width:drawerWidth
        }
    }}>
        <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween color={theme.palette.secondary.main}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                        <Typography variant='h4' fontWeight="bold">
                            VAP Tech
                        </Typography>
                    </Box>
                    {!isNonMobile &&(
                        <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                            <ChevronLeft />
                        </IconButton>
                    )}
                </FlexBetween>
            </Box>
            {/*1.17.19 -- Updated navbar -- Working on Sidebar -- Working on elements of the Sidebar. -- Lunch time 20/02/2024 */}

            <List>
                {navItems.map(({text, icon, url})=>{
                    if (!icon){
                        return(
                            <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem"}}>
                                {text}
                            </Typography>
                        )
                    }
                    const lcText= url
                    console.log("url: ", lcText)
                    return (
                        <ListItem key={text} disablePadding>
                            <ListItemButton 
                            onClick={()=>{
                                navigate(`/${lcText}`);
                                setActive(lcText)
                                }}
                                sx={{
                                    backgroundColor:active ===lcText ? theme.palette.secondary[300] : "transparent",
                                    color:active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                                }}
                                >
                                    <ListItemIcon
                                    sx ={{
                                        ml:"2rem",
                                        color:active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                                    }}
                                    >
                                         {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                    {active === lcText &&(

                                        <ChevronRightOutlined sx={{ml:"auto"}} />
                                    )}
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    </Drawer>

  )}
  </Box>
}

export default Sidebar