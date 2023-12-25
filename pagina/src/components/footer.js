import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function FooterBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{backgroundColor: '#FFB06B'}}>
          <Typography variant="h6" color="inherit" component="div" sx={{
                        textAlign: 'justify',
                        lineHeight: '1.5',}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CIMA 😎
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}