import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CinemasMenu from '../CinemasMenu/CinemasMenu';

const Header = () => {
    return <AppBar position="static">
        <Toolbar sx={{boxShadow: null}}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'secondary.dark' }}>
                Мультикіно
            </Typography>
            <CinemasMenu/>
        </Toolbar>
    </AppBar>
}

export default Header;