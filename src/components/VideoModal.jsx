import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoData, onCursorChange }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying, isMuted]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may require muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
      setIsPlaying(true);
    }
  }, [isOpen, videoData]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 84);
    }
  };

  const handleProgressClick = (e) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * (videoRef.current.duration || duration);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    const container = document.getElementById('cinematic-player-wrapper');
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        id="cinematic-player-wrapper"
        className="fixed inset-0 z-[100] bg-black flex flex-col justify-between overflow-hidden select-none"
      >
        {/* Top Minimal Cinema Bar */}
        <div className="relative z-20 w-full px-6 sm:px-12 py-6 flex items-center justify-between border-b border-[#222222]/80 bg-black/90">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="font-mono-code text-xs tracking-[0.25em] text-white uppercase font-bold">
              {videoData?.title || 'SHOWREEL // 2026'}
            </span>
            <span className="hidden sm:inline font-mono-code text-[11px] text-[#888888] tracking-widest">
              [ {videoData?.aspectRatio || '2.39:1'} · {videoData?.resolution || '4K PRORES'} ]
            </span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={() => onCursorChange?.({ type: 'CLOSE' })}
            onMouseLeave={() => onCursorChange?.(null)}
            className="flex items-center gap-3 text-xs font-mono-code text-[#888888] hover:text-white uppercase tracking-[0.25em] py-1.5 px-3 border border-[#222222] hover:border-white transition-all cursor-pointer"
          >
            <span>CLOSE</span>
            <span className="text-[10px] hidden sm:inline">[ESC]</span>
            <span className="text-sm font-bold leading-none">✕</span>
          </button>
        </div>

        {/* Cinematic Viewport with Letterbox Bars */}
        <div
          className="relative flex-1 flex items-center justify-center bg-black overflow-hidden cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={videoData?.videoUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            playsInline
            className="w-full max-h-[82vh] object-contain"
          />

          {/* Big Center Play Pause Flash Icon */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center pl-1 text-white bg-black/70">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Subtle Viewfinder Frame Lines */}
          <div className="absolute inset-6 pointer-events-none border border-white/10 hidden sm:block">
            <div className="absolute top-2 left-2 text-[10px] font-mono-code text-white/40">REC ●</div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono-code text-white/40">KRISHNA KUMAR // CUT</div>
            <div className="absolute bottom-2 right-2 text-[10px] font-mono-code text-white/40">TC: {formatTime(currentTime)}:12</div>
          </div>
        </div>

        {/* Minimal Controls Bar */}
        <div className="relative z-20 w-full px-6 sm:px-12 py-6 bg-black/95 border-t border-[#222222]">
          {/* Scrubber Timeline */}
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="w-full h-2 bg-[#222222] hover:h-3 transition-all cursor-pointer relative mb-4"
          >
            <div
              className="h-full bg-white relative transition-all duration-75"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white shadow-lg" />
            </div>
          </div>

          <div className="flex items-center justify-between font-mono-code text-xs text-[#888888]">
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="text-white hover:text-[#888888] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                {isPlaying ? 'PAUSE [SPACE]' : 'PLAY [SPACE]'}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="text-white hover:text-[#888888] uppercase tracking-wider transition-colors cursor-pointer"
              >
                {isMuted ? 'UNMUTE [M]' : 'MUTE [M]'}
              </button>

              <span className="text-white tracking-widest hidden sm:inline">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="hidden md:inline text-[11px] text-[#888888]">
                {videoData?.label || "DIRECTOR'S CUT"}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="text-white hover:text-[#888888] uppercase tracking-wider transition-colors cursor-pointer"
              >
                {isFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
