import React from 'react';
import Logo from './Logo';

const SearchResult: React.FC = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Logo />
      <div style={{ padding: '20px' }}>
        <h1>検索結果の見出し</h1>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          検索結果の本文です
        </p>
      </div>
    </div> 
  );
};

export default SearchResult;
