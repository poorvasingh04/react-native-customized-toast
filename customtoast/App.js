import React, { useState } from 'react';
import {
  StatusBar,
} from 'react-native';
import ToastView from './examples/ToastView';

function App(){

  return (
    <>
    <StatusBar barStyle="dark-content" />
      <ToastView />    
    </>
  );
};

export default App;
