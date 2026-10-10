import React, { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import AmbientGlow from './components/AmbientGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import FocusSection from './components/FocusSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [modalVideo, setModalVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenShowreel = () => {
    setModalVideo(portfolioData.showreel);
    setIsModalOpen(true);
  };

  const handleSelectProject = (project) => {
    setModalVideo({
      id: project.id,
      title: `${project.number} // ${project.title}`,
      label: project.category,
      aspectRatio: project.aspectRatio,
      resolution: '4K PRORES',
      videoUrl: project.videoUrl,
      duration: project.duration,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalVideo(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-sans-main selection:bg-white selection:text-black">
      {/* Scroll Progress Bar at top */}
      <ScrollProgress />

      {/* Subtle Noise Grain Overlay */}
      <div className="noise-overlay" />

      {/* Subtle Ambient Cursor Light */}
      <AmbientGlow />

      {/* Fixed Navbar */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Main Content Flow matching Reference Architecture */}
      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* 2. Marquee Infinite Ticker */}
        <Marquee />

        {/* 3. Work Section */}
        <WorkSection onSelectProject={handleSelectProject} />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Currently / Focus Section */}
        <FocusSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Cinematic Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoData={modalVideo}
      />
    </div>
  );
}
