import React from 'react';
import {
  View, StatusBar,
} from 'react-native';
import ToastView from './src/ToastView';

function App(){

  return (
    <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
      <ToastView />    
    </View>
  );
};

export default App;
