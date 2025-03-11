import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Контакты
      </Typography>
      <Typography variant="body1" paragraph>
        Свяжитесь с нами, если у вас есть вопросы или предложения.
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Ваше имя"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Ваш email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Сообщение"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Отправить
        </Button>
      </form>
    </Container>
  );
};

export default Contact;