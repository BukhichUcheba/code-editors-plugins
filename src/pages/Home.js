import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import codeEditorsImage from '../assets/code-editors.jpg'; // Путь к картинке

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Минимальная высота для центрирования по вертикали
        textAlign: 'center',
        p: 3, // Отступы
        marginLeft: 0, // Убираем лишний отступ слева
      }}
    >
      {/* Картинка */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '800px', // Ограничиваем ширину картинки
          mb: 4, // Отступ снизу
        }}
      >
        <CardMedia
          component="img"
          image={codeEditorsImage}
          alt="Редакторы кода"
          sx={{
            width: '100%', // Ширина картинки 100% от родительского контейнера
            height: 'auto', // Высота автоматически подстраивается
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Заголовок */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 2, // Отступ снизу
        }}
      >
        Добро пожаловать!
      </Typography>

      {/* Описание */}
      <Typography
        variant="h5"
        component="p"
        sx={{
          color: 'primary.main', // Цвет как у заголовка
          lineHeight: 1.6,
          mb: 4, // Отступ снизу
        }}
      >
        На сайте вы найдете информацию о редакторах с подсветкой кода и полезных плагинах для веб-разработки.
      </Typography>

      {/* Футер */}
      <Box
        sx={{
          mt: 'auto', // Прижимаем футер к низу
          py: 3, // Отступы сверху и снизу
          width: '100%',
          backgroundColor: 'background.paper', // Цвет фона
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Редакторы с подсветкой кода
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © 2025 Все права защищены
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;