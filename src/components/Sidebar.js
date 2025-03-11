import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240, // Ширина сайдбара
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240, // Ширина сайдбара
          boxSizing: 'border-box',
          marginTop: '64px', // Отступ для хедера
          backgroundColor: 'primary.main', // Цвет как у шапки
          color: 'white', // Цвет текста
        },
      }}
    >
      <List>
        {['Главная', 'Редакторы', 'Плагины', 'О нас', 'Контакты', 'Видео'].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={
              index === 0
                ? '/'
                : index === 5
                ? '/video' // Ссылка на VideoPage
                : `/${text.toLowerCase()}`
            }
            sx={{
              color: 'white', // Цвет текста
              '&:hover': {
                backgroundColor: 'primary.dark', // Цвет при наведении
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;