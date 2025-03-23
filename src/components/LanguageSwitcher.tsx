'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

const LSwitcher = ({ currentLanguage, onChange }) => {
  const [language, setLanguage] = useState(currentLanguage);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("lang");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", language);
    }
    onChange(language);
  }, [language, onChange]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguage(newLanguage);

    const currentPath = router.asPath || '';

    // Обновление маршрута с новым языковым параметром
    router.push(`/${newLanguage}${currentPath.split('/').slice(1).join('/')}`);
  };

  return (
    <button onClick={toggleLanguage} className="px-4 py-2 bg-blue-500 text-white rounded-md">
      {language === "en" ? "🇬🇧" : "🇷🇺"}
    </button>
  );
};

export default LSwitcher;
