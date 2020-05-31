import React from 'react';
import AppStyle from './components/styles/AppStyle';
import NavigationBar from './components/header/NavigationBar';
import HeadingDisplay from './components/header/HeadingDisplay';

export default function App() {

  return (
    <AppStyle>
      <NavigationBar />
      <HeadingDisplay />
    </AppStyle>
  );

};