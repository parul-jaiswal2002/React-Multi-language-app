import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const availableLanguages = ['en', 'hi', 'chi'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    
    fallbackLng: "en",
    debug : true,
    whitelist: availableLanguages,
    detection: {
        order : ['htmlTag', 'cookie', 'localStorage', 'subdomain'],

    },
    
    interpolation: {
        escapeValue: false 
      },
    
  });

  export default i18n