import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  badge?: string;
  initials?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, badge, initials, githubUrl, linkedinUrl }) => (
  <div className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col h-full border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors duration-500"></div>

    <div className="flex items-start justify-between mb-6">
      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-xl font-black text-gray-900 dark:text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
        {initials || name.split(' ').map(n => n[0]).join('')}
      </div>

      {badge && (
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg">
          {badge}
        </div>
      )}
    </div>

    <div className="relative z-10 flex-grow">
      <h3 className="text-2xl font-black mb-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{name}</h3>
      <div className="text-gray-400 dark:text-gray-500 font-bold text-xs uppercase tracking-widest mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 inline-block w-full">
        {role}
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
        {bio}
      </p>
    </div>

    <div className="relative z-10 flex gap-4 mt-auto">
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483c.437.625.64 1.25.75 1.5 0 .25-.213.517-.517.517H3.483c-.304 0-.517-.267-.517-.517 0-.25.213-.517.517-.517h17.034c.304 0 .517.267.517.517 0 .25-.213.517-.517.517H3.483z" clipRule="evenodd" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <section className="mb-32" id="team">
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 text-center">
        Founding Team – MEDYPHAS AI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <TeamMember
          name="Ajay Kumar Reddy K"
          role="Founder & AI Systems Lead"
          bio="Full-stack AI developer leading the architecture and deployment of MEDYPHAS AI. Focused on LLM integration, triage intelligence systems, and scalable healthcare AI infrastructure."
          initials="AK"
          linkedinUrl="https://www.linkedin.com/in/ajay-kumar-reddy-krishnareddy-gari-a4885b282/"
          githubUrl="https://github.com/ajaykumarreddy-k"
        />
        <TeamMember
          name="Sameer Raja E"
          role="Co-Founder & Backend Engineering Lead"
          bio="Specializing in backend systems, API architecture, and secure data handling for healthcare applications. Ensures high-performance and scalable server infrastructure."
          initials="SR"
          linkedinUrl="https://www.linkedin.com/in/sameer-raja-e-a9a7532b5"
          githubUrl="https://github.com/sameer-771"
        />
        <TeamMember
          name="Mikhil Sai N"
          role="Co-Founder & Product & ML Engineer"
          bio="Focused on machine learning implementation, model optimization, and product experience design. Works on improving model accuracy and real-world deployment readiness."
          initials="MS"
          linkedinUrl="https://www.linkedin.com/in/mikhil-sai-n-a6a7532b5"
          githubUrl="https://github.com/mikhil-sai-n"
        />
      </div>
    </section>
  );
};

export default TeamSection;