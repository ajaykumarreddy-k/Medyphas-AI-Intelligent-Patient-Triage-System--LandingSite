import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="mb-32">
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12 max-w-3xl leading-none">
        CLINICAL PRECISION. <span className="text-gray-400 dark:text-gray-600">STATISTICAL CONFIDENCE.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Block 1 */}
        <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-3xl h-full min-h-[300px] flex flex-col justify-start transition-colors duration-300">
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-red-500">
             <span className="material-icons text-3xl">monitor_heart</span>
          </div>
          <h3 className="text-xl font-black uppercase mb-4 tracking-tight">Rapid Assessment</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
            Emergency triage environments demand speed and consistency. Manual prioritization under pressure introduces variability and delay.
            <br /><br />
            Medyphas AI augments clinical workflows with structured intelligence, reducing uncertainty and supporting faster decision-making.
          </p>
        </div>

        {/* Image Block 1 */}
        <div 
          className="bg-surface-light dark:bg-surface-dark rounded-3xl h-full min-h-[300px] bg-cover bg-center transition-opacity hover:opacity-100 opacity-80 duration-500" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9P0b2YNC327qUevbt90MMekq7oDI5w85A-XXWxWX5q0Q5RP6yVbr0BtpY-9327ngXBwupWn74O8ua4KXaJzJtMtELkovyr_5KVK4-8iMRvNpSpvmB0AlsYpyJYSfnohwo9PS6Mf-WSToJi5cb777H7OgcSNRsjCCMgknPZ6XqZvaf56rtHICqE7WmAwZLoa7quWGtoghmTUgoOwokP5gYNx3LyYsPvn0mAb_WsNfSMEaZ8x1XKDsvqFFYELPQrLmm9ZzLY6TR67E')" }}
        ></div>

        {/* Image Block 2 */}
        <div 
          className="bg-surface-light dark:bg-surface-dark rounded-3xl h-full min-h-[300px] hidden md:block bg-cover bg-center transition-opacity hover:opacity-100 opacity-80 duration-500" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxMTjW1URJOKrJLApmbaOMSiRMltcjd3efS3cDxBPxAdl4ItYgZ6xnaT0IqVB6Vrw2klbZVdGOiUJ89qTL6juXPH-7f4yx2ZQQ2AP0nvfYNfiBchwAFIj7YsPRpiO0wJocKkl1G_jrhm1Rp2vQwmntMUiTZCPsvpGgkBIyvWHQrNAu4cMWJ6QFdkdvVwU9U3WqqiGaftlcP9TaaBb9GLo6x5H86UHM_3V6L73UGuEHhqoIEQDwpCaCHEjA05mf6A4gvsT2wFi6MSY')" }}
        ></div>

        {/* Text Block 2 */}
        <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-12 rounded-3xl h-full min-h-[300px] flex flex-col justify-start transition-colors duration-300">
           <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-blue-500">
             <span className="material-icons text-3xl">insights</span>
          </div>
          <h3 className="text-xl font-black uppercase mb-4 tracking-tight">System Reliability</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
            Designed to integrate seamlessly with hospital systems, Medyphas AI provides real-time severity scoring based on statistical modeling and structured clinical reasoning.
            <br /><br />
            Every recommendation is backed by confidence metrics, ensuring transparency and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;