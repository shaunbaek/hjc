import { useLanguage } from "~/root";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-10 px-3 py-1 rounded-full bg-coffee-light text-coffee-dark border border-coffee-dark font-medium transition hover:bg-coffee hover:text-white"
    >
      {language === 'ko' ? 'English' : '한국어'}
    </button>
  );
} 