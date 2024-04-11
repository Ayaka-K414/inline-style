import { useState } from 'react'
import './App.css'
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
// import { Emotion } from './components/Enotion';
// import { StyledComponents } from './components/StyledComponents';

export const App = () => {
  return(
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      {/* <StyledComponents /> */}
      {/* <Emotion /> */}
    </div>
  );
};