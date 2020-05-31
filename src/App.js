import React from 'react';
import AppStyle from './components/styles/AppStyle';
import Header from './components/header/Header';
import NavigationBar from './components/header/NavigationBar';

export default function App() {

  return (
    <AppStyle>
      <NavigationBar />
      <Header />
    </AppStyle>
  );

};