# react-native-customized-toast

A react-native framework to render customized toast in both iOS and Android with common behaviour.



**Example: **
```
import React, { useState } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import { Toast, Position, Theme } from 'react-native-customized-toast';

function ToastView(){
  const [message, setMessage] = useState(null);
  
  const showToast = () => {
    setMessage({ text: 'This is a custom Toast' });
  }
  
  const hideToast = () => {
    setMessage(null);
  }
  
  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight
        onPress={showToast}
      >
        <Text>Show Toast</Text>
      </TouchableHighlight>
      <Toast
        message={message}
        position={toastPosition}
        theme={toastTheme}
      >  
      <TouchableHighlight
        onPress={hideToast}
      >
        <Text>Hide Toast</Text>
      </TouchableHighlight>
      </Toast>     
    </View>
  );
};

export default ToastView;


```

### Installing

npm install react-native-customized-toast


## Contributing

Any sort of issues is welcome. Please share the screenshot of the bug. If there are any errors, please share them as well. 

Pull requests are also appreciated. If you want to change the API, feel free to connect and discuss first.



