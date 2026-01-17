import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2 className="greeting text-matcha">{t('hero.greeting')}</h2>
        <h1 className="name">User Name.</h1>
        <h3 className="title">{t('hero.title')}</h3>
        <p className="description">
          {t('hero.description')}
        </p>
        <button className="cta-button bg-matcha text-cosmic hover:opacity-90 transition-opacity" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
