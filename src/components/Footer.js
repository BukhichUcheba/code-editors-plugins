import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 3,
        marginLeft: '240px', // Отступ для сайдбара
        marginTop: 'auto', // Футер прижат к низу
      }}
      component="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        
      </Typography>
    </Box>
  );
};

export default Footer;