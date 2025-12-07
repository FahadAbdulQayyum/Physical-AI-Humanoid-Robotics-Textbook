import React from 'react';
import {useLanguage} from '@site/src/context/LanguageContext';

export default function LanguageToggle(): JSX.Element {
  const {isUrdu, toggle} = useLanguage();

  return (
    <div style={{position: 'fixed', top: 12, right: 12, zIndex: 9999}}>
      <button
        onClick={toggle}
        style={{
          padding: '8px 12px',
          borderRadius: 6,
          border: '2px solid #25c2a0',
          backgroundColor: isUrdu ? '#25c2a0' : '#fff',
          color: isUrdu ? '#fff' : '#25c2a0',
          fontWeight: 700,
          cursor: 'pointer',
        }}
        aria-label="Toggle language"
      >
        {isUrdu ? '🇵🇰 اردو' : '🇬🇧 English'}
      </button>
    </div>
  );
}
