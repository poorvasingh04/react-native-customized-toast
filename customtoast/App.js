import React from 'react';
import {
  View, StatusBar, Text,
} from 'react-native';

function App(){

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <StatusBar barStyle="dark-content" />
      <Text> This is a React native framework</Text>    
    </View>
  );
};

export default App;
