import React from 'react';
import ProjectCard from './ProjectCard';

const WorkSection: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-gray-900 dark:text-white">
          PERFORMANCE MATRIX EVOLUTION
        </h2>
        <p className="text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Structured intelligence across the clinical triage pipeline.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-full mx-auto">
        <ProjectCard
          stage="01"
          title="Symptom Engine"
          description="Natural language interpretation of patient-reported conditions using advanced NLP models."
          icon="psychology"
        />

        <ProjectCard
          stage="02"
          title="Risk Stratification"
          description="Statistical severity modeling with confidence scoring to predict patient outcomes."
          icon="analytics"
        />

        <ProjectCard
          stage="03"
          title="Priority Assignment"
          description="AI-generated triage category with automated escalation logic for critical cases."
          icon="assignment_late"
        />

        <ProjectCard
          stage="04"
          title="Clinical Dashboard"
          description="Real-time patient prioritization interface designed for high-stress environments."
          icon="dashboard"
        />

        <ProjectCard
          stage="05"
          title="Confidence Scoring"
          description="Probabilistic reliability estimation providing transparency for every AI decision."
          icon="verified"
        />

        <ProjectCard
          stage="06"
          title="Escalation Protocol"
          description="Automated critical-case routing triggers ensuring immediate attention where needed."
          icon="notification_important"
        />

        <ProjectCard
          stage="07"
          title="API Integration"
          description="Seamless hospital system interoperability with FHIR and HL7 standard support."
          icon="hub"
        />

        <ProjectCard
          stage="08"
          title="Audit & Logging"
          description="Transparent decision traceability for compliance and retrospective clinical review."
          icon="receipt_long"
        />
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block relative animate-bounce-slow">
          <img 
            alt="System Agent" 
            className="mx-auto mb-4 w-[60px]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCCWoWZeYNw1_2-FCrgS_GLm637RJrYuP4LFh67e9qy0qCfhpyGu8vm63Jts5wx12pd_pcpUvb_QWBmRVBvU_dhjIXH2sBRQHn3oJWspBNs9_uTeTe9eZsQ63LzuTqCoWpPQ2Iu5U6-BJJUjnde0buj-Zs6bLj-GtKLV7HeYaxVSROzj2cxIxfwDZmVJo29zwI9F3vE4mqjv6r4dtXQx6NoPJ2HmNMJU6UCxd2fKknSyo-B5pRAtKBxNiWcvv5vm1wYpvyh4mtkKc" 
          />
        </div>
        <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white">
          System updates deploying<br />continuously ⚡
        </h3>
      </div>
    </section>
  );
};

export default WorkSection;