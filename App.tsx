import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import StrategiesPage from './pages/StrategiesPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicePage from './pages/services/ServicePage';
import AreaPage from './pages/areas/AreaPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/areas/:slug" element={<AreaPage />} />
          <Route path="/areas/:slug/:subslug" element={<AreaPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
