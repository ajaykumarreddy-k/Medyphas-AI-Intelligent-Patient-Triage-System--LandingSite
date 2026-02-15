import React, { useRef, useState, useEffect } from 'react';

interface ProjectQuickLookProps {
  isDark: boolean;
}

const ProjectQuickLook: React.FC<ProjectQuickLookProps> = ({ isDark }) => {
  const theme = isDark ? 'black' : 'white';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: `/images/theme/${theme}/5.png`, title: "Patient Dashboard", desc: "Start a triage or check status." },
    { src: `/images/theme/${theme}/6.png`, title: "Medical Staff Portal", desc: "Overview of active cases and alerts." },
    { src: `/images/theme/${theme}/7.png`, title: "Triage Assessment", desc: "AI-guided symptom input." },
    { src: `/images/theme/${theme}/8.png`, title: "Clinical Reporting", desc: "Detailed risk analysis and predictions." },
    { src: `/images/theme/${theme}/9.png`, title: "System Configuration", desc: "Manage hospital integrations." },
    { src: `/images/theme/${theme}/10.png`, title: "Analytics Overview", desc: "High-level throughput metrics." },
    { src: `/images/theme/${theme}/11.png`, title: "Patient History", desc: "Timeline of previous visits." },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="mb-32">
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-gray-900 dark:text-white">
          Project Quick Look
        </h2>
        <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Rapid visualization of system components and datasets.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 relative group">

        {/* Navigation Arrows */}
        {activeIndex > 0 && (
          <button
            onClick={() => {
              const newIndex = activeIndex - 1;
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: newIndex * (scrollRef.current.offsetWidth + 24),
                  behavior: 'smooth'
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-800 dark:text-white shadow-lg transition-all hover:scale-110 hover:bg-white/40 dark:hover:bg-black/40 -ml-6 hidden md:flex"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}

        {activeIndex < images.length - 1 && (
          <button
            onClick={() => {
              const newIndex = activeIndex + 1;
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: newIndex * (scrollRef.current.offsetWidth + 24),
                  behavior: 'smooth'
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-800 dark:text-white shadow-lg transition-all hover:scale-110 hover:bg-white/40 dark:hover:bg-black/40 -mr-6 hidden md:flex"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-full md:w-[800px] h-[500px] flex-none relative bg-gray-100 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl transition-transform duration-300">
              <div className="w-full h-full p-8 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={`Interface View ${i + 1}`}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Text & Indicators */}
        <div className="mt-8 text-center transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{images[activeIndex]?.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{images[activeIndex]?.desc}</p>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: i * (scrollRef.current.offsetWidth + 24), // width + gap estimation
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectQuickLook;