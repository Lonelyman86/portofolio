import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.dokugaku.title'),
      description: t('projects.dokugaku.description'),
      tech: ['React', 'Japanese Learning', 'Dashboard'],
      link: 'https://dokugaku-nihongo.netlify.app/'
    },
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tech: ['React', 'Recharts', 'Firebase'],
      link: '#'
    },
    {
      title: t('projects.chat.title'),
      description: t('projects.chat.description'),
      tech: ['Socket.io', 'Node.js', 'React'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <header>
              <div className="project-top">
                <div className="folder-icon text-matcha">
                   <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-links hover:text-matcha transition-colors">
                  <a href={project.link} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title group-hover:text-matcha transition-colors">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </header>
            <footer>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
