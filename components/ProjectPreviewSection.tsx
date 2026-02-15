import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';

interface ProjectPreviewSectionProps {
    isDark: boolean;
}

const ProjectPreviewSection: React.FC<ProjectPreviewSectionProps> = ({ isDark }) => {
    const theme = isDark ? 'black' : 'white';

    const layers = [
        {
            title: "Secure Access Gateway",
            description: "Unified authentication layer for medical staff and patients. Role-based access control ensures HIPAA-aligned security. Optimized for instant credential validation and zero-latency session initiation.",
            imageIndex: 0
        },
        {
            title: "System Intelligence Hub",
            description: "Real-time operational overview of hospital readiness. Displays staffing, equipment, bed capacity, and AI confidence metrics. Designed for high-throughput ER environments with live data refresh.",
            imageIndex: 1
        },
        {
            title: "Live Triage Engine",
            description: "AI-powered ER queue prioritization system. Automatically stratifies patients into Critical, High, Medium, and Low risk tiers. Delivers sub-second triage scoring with explainable AI confidence levels.",
            imageIndex: 2
        },
        {
            title: "AI Diagnostic Assistant",
            description: "Clinical co-pilot for differential diagnosis and research assistance. Supports real-time conversational queries for medical staff. Built for low-latency response and high contextual accuracy.",
            imageIndex: 3
        },
        {
            title: "Rapid Recommendation Engine",
            description: "Instant symptom-based medication and care guidance. Uses structured symptom + history inputs for optimized suggestions. Designed to operate with 83–95% confidence prediction range.",
            imageIndex: 4
        },
        {
            title: "Infrastructure & API Control",
            description: "Centralized configuration for AI models and hospital integrations. Supports BYOK (Bring Your Own Key) model architecture. Ensures scalable, modular deployment across institutions.",
            imageIndex: 5
        },
        {
            title: "Patient Intelligence View",
            description: "Personalized health monitoring and appointment management. Displays vitals, AI analysis, and recommended actions. Built for clarity, speed, and accessibility.",
            imageIndex: 6
        },
        {
            title: "EHR Integration Layer",
            description: "Secure ingestion of HL7, FHIR, JSON, and XML records. Automated parsing and structuring for AI processing. Optimized for high-volume hospital data pipelines.",
            imageIndex: 7
        },
        {
            title: "Structured Clinical Input System",
            description: "Manual health metric entry with guided validation. Captures vitals, symptoms, and pre-existing conditions. Ensures structured data for accurate AI inference.",
            imageIndex: 8
        },
        {
            title: "Predictive Risk Stratification Engine",
            description: "Analyzes patient vitals and historical conditions. Outputs risk level, diagnosis summary, and action plan. Engineered for real-time predictive healthcare intelligence.",
            imageIndex: 9
        }
    ];

    return (
        <section className="mb-32 relative px-4">
            <div className="text-center mb-24 relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-red-100 dark:border-red-900/30">
                    Interface Evolution
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-gray-900 dark:text-white">
                    Operational Layers
                </h2>
                <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Designed for high-throughput clinical environments. Zero-latency intelligence. Built for mission-critical care.
                </p>
            </div>

            {/* Circular Gallery Implementation */}
            <div className="w-full h-[1000px] relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-900">
                <CircularGallery
                    items={layers.map((layer, index) => ({
                        image: `/images/theme/${theme}/${index + 1}.png`,
                        text: layer.title
                    }))}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    font="bold 30px Figtree"
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
        </section>
    );
}; export default ProjectPreviewSection;
