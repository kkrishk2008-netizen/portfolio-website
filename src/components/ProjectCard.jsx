import React, { useRef, useState } from 'react';

export default function ProjectCard({ project, onSelectProject }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article
      className="group flex flex-col gap-6 cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProject(project)}
    >
      {/* Project Meta Information above the image matching reference */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="font-mono-main text-[11px] tracking-[0.15em] text-gray-500 uppercase">
            {project.number} / {project.category}
          </span>
          {project.isSpec && (
            <span className="font-mono-main text-[10px] tracking-wider uppercase border border-gray-600 px-2 py-0.5 text-gray-300">
              SPEC PROJECT
            </span>
          )}
        </div>

        <h3 className="font-sans-main text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-white group-hover:text-gray-300 transition-colors">
          {project.title}
        </h3>

        <p className="font-sans-main text-gray-400 font-light text-[clamp(0.95rem,1.2vw,1.15rem)] leading-[1.5] max-w-[700px]">
          {project.description}
        </p>

        {project.clientNotice && (
          <p className="font-mono-main text-[11px] tracking-wider text-gray-400 uppercase">
            {project.clientNotice}
          </p>
        )}
      </div>

      {/* Media Window Container matching reference */}
      <div className="relative aspect-video w-full overflow-hidden border border-[#161616] bg-[#0b0b0b]">
        {/* Poster Image */}
        <img
          src={project.posterUrl}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full object-cover filter grayscale contrast-110 transition-all duration-[1200ms] ease-out ${
            isHovered ? 'scale-[1.025] contrast-125 brightness-105' : 'scale-100'
          }`}
        />

        {/* Video Player */}
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-115 transition-all duration-500 ${
            isPlaying ? 'opacity-100 scale-[1.025]' : 'opacity-0 scale-100'
          }`}
        />

        {/* Minimal Corner Meta Overlay */}
        <div className="absolute inset-0 p-4 sm:p-6 pointer-events-none flex flex-col justify-between z-10">
          <div className="flex justify-between items-start text-[10px] font-mono-main text-white/50 tracking-widest uppercase">
            <span>[ {project.aspectRatio} ]</span>
            <span>{isHovered ? 'PLAYING' : 'HOVER TO PREVIEW'}</span>
          </div>

          <div className="flex justify-between items-end text-[10px] font-mono-main text-white/50 tracking-widest uppercase">
            <span className="hidden sm:inline">
              {project.deliverables?.join(' • ')}
            </span>
            <span className="ml-auto text-white group-hover:translate-x-1 transition-transform">
              WATCH CUT ↗
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
