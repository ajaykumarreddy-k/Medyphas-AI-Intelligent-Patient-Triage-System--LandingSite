import React from 'react';
import { motion } from 'framer-motion';

const ArchitectureSection: React.FC = () => {
    return (
        <section className="mb-32 px-4">
            <div className="text-center mb-16 relative">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-900/30">
                    System Design
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 text-gray-900 dark:text-white">
                    Architecture Diagram
                </h2>
                <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Infrastructure Overview: Gemini 1.5 Pro Orchestration & Dual-Layer AI Model.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto w-full relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-8"
                >
                    <img
                        src="/images/image.png"
                        alt="MEDYPHAS AI Architecture Diagram"
                        className="w-full h-auto object-contain mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
