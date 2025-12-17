import React from 'react';
import {LanguageProvider} from '@site/src/context/LanguageContext';
import LanguageToggle from '@site/src/components/LanguageToggle';
import ChatBox from '@site/src/components/ChatBox';

export default function Root({children}: {children: React.ReactNode}) {
  return (
    <LanguageProvider>
      <LanguageToggle />
      {children}
      <ChatBox backendApiUrl={null} />
    </LanguageProvider>
  );
}
