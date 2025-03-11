import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Editors from './pages/Editors';
import Plugins from './pages/Plugins';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import Contact from './pages/Contact';
import VideoPage from './pages/VideoPage'; // Импортируем VideoPage

const App = () => {
  return (
    <Router>
      <CssBaseline /> {/* Сбрасываем стили по умолчанию */}
      <Box sx={{ display: 'flex' }}>
        <Header /> {/* Хедер */}
        <Sidebar /> {/* Сайдбар */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: '240px', // Отступ для сайдбара
            marginTop: '64px', // Отступ для хедера
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editors" element={<Editors />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<VideoPage />} /> {/* Добавляем маршрут для VideoPage */}
          </Routes>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;