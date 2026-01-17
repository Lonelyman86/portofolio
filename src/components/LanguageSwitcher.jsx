import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'en' ? 'text-matcha bg-matcha/10' : 'text-milk hover:text-matcha'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('id')}
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'id' ? 'text-matcha bg-matcha/10' : 'text-milk hover:text-matcha'}`}
      >
        ID
      </button>
      <button
        onClick={() => changeLanguage('jp')}
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${i18n.language === 'jp' ? 'text-matcha bg-matcha/10' : 'text-milk hover:text-matcha'}`}
      >
        JP
      </button>
    </div>
  );
};

export default LanguageSwitcher;
