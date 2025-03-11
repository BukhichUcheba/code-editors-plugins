import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const VideoPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Видеоуроки по редакторам кода
      </Typography>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          paddingTop: '56.25%', // Соотношение сторон 16:9
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://vkvideo.ru/video-220018529_456240812" // Замените на ваш URL
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Container>
  );
};

export default VideoPage;