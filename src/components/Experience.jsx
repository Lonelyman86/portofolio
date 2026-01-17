import React from 'react';
import { useTranslation } from 'react-i18next';
// import './Experience.css'; // Will create if needed, or use inline/Tailwind

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.mitratel.title'),
      company: t('experience.mitratel.company'),
      period: t('experience.mitratel.period'),
      description: t('experience.mitratel.description')
    },
    {
      title: t('experience.japanclub.title'),
      company: t('experience.japanclub.company'),
      period: t('experience.japanclub.period'),
      description: t('experience.japanclub.description')
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">{t('experience.title')}</h2>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-matcha before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-matcha bg-cosmic shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-matcha">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-700 bg-slate-800/50 hover:bg-slate-800/80 transition-colors shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-100">{exp.title}</div>
                  <time className="font-mono text-xs text-matcha">{exp.period}</time>
                </div>
                <div className="text-slate-400 mb-2 text-sm">{exp.company}</div>
                <div className="text-slate-300 text-sm">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
