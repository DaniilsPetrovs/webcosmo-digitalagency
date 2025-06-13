// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// type LangContextType = {
//     lang: string;
//     setLang: (lang: string) => void;
// };

// const LangContext = createContext<LangContextType | undefined>(undefined);

// export const useLang = () => {
//     const context = useContext(LangContext);
//     if (!context) throw new Error("useLang must be used within LangProvider");
//     return context;
// };

// export const LangProvider = ({ children }: { children: ReactNode }) => {
//     const [lang, setLang] = useState("RUS");

//     return (
//         <LangContext.Provider value={{ lang, setLang }}>
//             {children}
//         </LangContext.Provider>
//     );
// };

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  
  type LangContextType = {
    lang: string;
    setLang: (lang: string) => void;
  };
  
  const LangContext = createContext<LangContextType | undefined>(undefined);
  
  export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) throw new Error("useLang must be used within LangProvider");
    return context;
  };
  
  export const LangProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<string | null>(null); // <-- пока нет языка
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const storedLang = localStorage.getItem("lang");
      if (storedLang) {
        setLang(storedLang);
        setLoading(false);
        return;
      }
  
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          const country = data?.country;
          let detectedLang = "EN";
  
          if (country === "RU") detectedLang = "RUS";
          else if (country === "LV") detectedLang = "LV";
  
          setLang(detectedLang);
          localStorage.setItem("lang", detectedLang);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Geo fail:", err);
          setLang("RUS");
          setLoading(false);
        });
    }, []);
  
    if (loading || !lang) return null; // ничего не рендерим, пока определяем язык
  
    return (
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    );
  };