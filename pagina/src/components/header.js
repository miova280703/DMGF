import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

export default function DenseAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#AED9E0', borderBottom: '2px solid #AED9E0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" sx={{ backgroundColor: '#AED9E0' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: '#1A5276' }} onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ textAlign: 'justify', ineHeight: '1.5', color: '#1A5276' }}>
                    
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleCloseMenu} sx={{ color: '#1A5276' }} component={NavLink} to="/DMGF/">Inicio</MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{ color: '#1A5276' }} component={NavLink} to="/DMGF/tatuaje">Tatuajes con tinta invisible</MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{ color: '#1A5276' }} component={NavLink} to="/DMGF/reproductor">Recuerdos con canciones</MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{ color: '#1A5276' }} component={NavLink} to="/DMGF/notas">Notitas de amorts</MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{ color: '#1A5276' }} component={NavLink} to="/DMGF/jorge">¿Le ponesmos Jorge al niño?</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}