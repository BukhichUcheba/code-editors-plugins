import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Plugins = () => {
  const plugins = [
    { name: 'ESLint', description: 'Линтер для JavaScript', link: 'https://eslint.org/' },
    { name: 'Prettier', description: 'Форматирование кода', link: 'https://prettier.io/' },
    { name: 'Auto Rename Tag', description: 'Автоматическое переименование тегов', link: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Плагины для веб-разработки
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell>Ссылка</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plugins.map((plugin) => (
              <TableRow key={plugin.name}>
                <TableCell>{plugin.name}</TableCell>
                <TableCell>{plugin.description}</TableCell>
                <TableCell>
                  <a href={plugin.link} target="_blank" rel="noopener noreferrer">
                    Перейти
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Plugins;