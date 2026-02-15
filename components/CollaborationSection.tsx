import React from 'react';

const CollaborationSection: React.FC = () => {
  return (
    <section className="pb-24">
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
        HOW MEDYPHAS AI<br />WORKS
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Notebook Container */}
        <div className="bg-white dark:bg-gray-100 rounded-lg shadow-2xl p-1 transform rotate-1 border border-gray-200 transition-transform hover:rotate-0 duration-500">
          
          {/* Binder Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-primary rounded-l-lg border-r border-red-500/20 z-10 flex flex-col items-center pt-8">
            <div className="w-3 h-3 bg-white rounded-full mb-8 shadow-inner"></div>
            <div className="w-3 h-3 bg-white rounded-full mb-8 shadow-inner"></div>
            <div className="w-3 h-3 bg-white rounded-full mb-8 shadow-inner"></div>
            <div className="w-3 h-3 bg-white rounded-full mb-8 shadow-inner"></div>
          </div>

          {/* Paper Content */}
          <div className="bg-white p-8 md:p-16 pl-20 min-h-[400px] relative overflow-hidden">
            {/* Lined Paper Pattern */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', 
                backgroundSize: '100% 2.5rem', 
                marginTop: '3rem' 
              }}
            ></div>

            <ul className="space-y-10 relative z-10 font-hand text-2xl md:text-3xl text-gray-800">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-sans text-sm font-bold bg-red-100 transform -rotate-3">1</span>
                <span className="transform -rotate-1">Capture structured patient input</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-sans text-sm font-bold bg-red-100 transform rotate-2">2</span>
                <span className="transform rotate-1">Apply NLP-based symptom interpretation</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-sans text-sm font-bold bg-red-100 transform -rotate-1">3</span>
                <span className="transform -rotate-1">Generate statistical severity score</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-sans text-sm font-bold bg-red-100 transform rotate-3">4</span>
                <span className="transform rotate-1">Assign triage priority with confidence level</span>
              </li>
            </ul>

            {/* Sticker Image */}
            <div className="absolute bottom-4 left-20 transform -rotate-6 shadow-lg bg-white p-2 pb-8 pt-2 w-32 border border-gray-200 transition-transform hover:rotate-6 hover:scale-110 duration-300">
              <img 
                alt="polaroid sticker" 
                className="w-full h-auto grayscale contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWqowrDasZVAh0tArhU9gG61uaX5_oD2yWI36SmfefflDGX_aaMzdzAglx-4DwkY7uCNRB0KrTEM3yyY4efaqP9-fKmFKnft0LVt43WX-_Eo3ErP4vgLS3QIdsn-PUlY3gOp5S68qJI4hWGvsIXXa6u2J2-AiPQIViHaN_cLZQhkJoSreJg7guOnVHy91gOAr4FSF0T6i1hPkDC86WE5MxbKkAa56P1ebcjqM7_rG1ht38hi5GaJCBqdcfYR2YuFaLnn2jXenVHQ"
              />
            </div>

            {/* Sticky Note */}
            <div className="absolute top-10 right-10 transform rotate-12 shadow-lg bg-blue-600 text-white p-4 w-32 font-bold text-center text-xs leading-tight border-2 border-white transition-transform hover:rotate-6 hover:scale-110 duration-300 cursor-pointer">
              HIPAA COMPLIANT
              <span className="block text-[8px] font-normal mt-1 opacity-80">ENCRYPTED DATA TRANSMISSION</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;