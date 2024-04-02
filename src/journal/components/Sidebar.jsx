import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const Sidebar = ({ drawerWidth = 240 }) => {
    const user = useSelector(state => state.auth);

    return (
        <Box
            component="nav"
            sx={{ 
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant="permanent" //? temporary
                open
                sx={{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {  boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h7" noWrap component="div">
                        { user.displayName }
                    </Typography>
                </Toolbar>

                <Divider />
                
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map((text, index) => (
                            <ListItem key={ index } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                        <Grid>
                                            <ListItemText primary={ text } />
                                            <ListItemText secondary={ 'Este es un texto de prueba' } />
                                        </Grid>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
