import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Editors = () => {
  const editors = [
    { name: 'VS Code', description: 'Редактор от Microsoft', link: 'https://code.visualstudio.com/' },
    { name: 'Sublime Text', description: 'Легкий и быстрый редактор', link: 'https://www.sublimetext.com/' },
    { name: 'Atom', description: 'Редактор от GitHub', link: 'https://atom.io/' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Популярные редакторы кода
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
            {editors.map((editor) => (
              <TableRow key={editor.name}>
                <TableCell>{editor.name}</TableCell>
                <TableCell>{editor.description}</TableCell>
                <TableCell>
                  <a href={editor.link} target="_blank" rel="noopener noreferrer">
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

export default Editors;