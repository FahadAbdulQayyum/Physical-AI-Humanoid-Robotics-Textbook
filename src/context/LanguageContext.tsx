import React, {createContext, useContext, useState, ReactNode} from 'react';

type LanguageContextType = {
  isUrdu: boolean;
  toggle: () => void;
  setUrdu: (v: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  isUrdu: false,
  toggle: () => {},
  setUrdu: () => {},
});

export const LanguageProvider = ({children}: {children?: ReactNode}) => {
  const [isUrdu, setIsUrdu] = useState(false);
  const toggle = () => setIsUrdu((v) => !v);
  return (
    <LanguageContext.Provider value={{isUrdu, toggle, setUrdu: setIsUrdu}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
