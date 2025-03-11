import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Редакторы с подсветкой кода
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Главная
        </Button>
        <Button color="inherit" component={Link} to="/editors">
          Редакторы
        </Button>
        <Button color="inherit" component={Link} to="/plugins">
          Плагины
        </Button>
        <Button color="inherit" component={Link} to="/about">
          О нас
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Контакты
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;