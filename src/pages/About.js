import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        О нас
      </Typography>
      <Typography variant="body1">
        Мы — команда энтузиастов, которые помогают разработчикам находить лучшие инструменты для работы.
      </Typography>
    </Container>
  );
};

export default About;