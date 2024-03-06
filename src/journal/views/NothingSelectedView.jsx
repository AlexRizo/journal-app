import { Grid, Typography } from "@mui/material"
import { StarOutlined } from "@mui/icons-material"

export const NothingSelectedView = () => {
    return (
        <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={ 0 }
        sx={{ minHeight: 'calc(100vh - 114px)', backgroundColor: 'primary.main', borderRadius: '3px'}}
    >
        <Grid 
            item
            xs={ 12 }
        >
            <StarOutlined sx={{ fontSize: 100, color: 'white' }} />
        </Grid>
        <Grid 
            item
            xs={ 12 }
        >
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
        </Grid>

    </Grid>
    )
}
