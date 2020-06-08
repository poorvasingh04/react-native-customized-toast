# react-native-customized-toast

A react-native framework to render customized toast in both iOS and Android with common behaviour.

### Installing

npm install react-native-customized-toast

### Example

![Toast Example Video](https://github.com/poorvasingh04/react-native-customized-toast/blob/master/customtoast/examples/toast_example.gif)

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
        position={Position.TOP}
        theme={Theme.LIGHT}
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
### Interfaces

Name | Type 
--- | --- 
Theme | LIGHT & DARK
Position | TOP, CENTER & BOTTOM
ToastFont | SMALL, MEDIUM, LARGE & XLARGE
Message   | { text : string }


### API

Props | Type | Default | Required 
--- | --- | ---  | ---
theme | Theme | Theme.LIGHT | false
message | Message | null | false 
children | ReactNode - Any React component  | null | false 
messageColor | String | defaults to red | false 
messageStyle | TextStyle | defaults to font size 16 and color red | false  
messageFontSize | Number | 16 | false 
duration | Number | 5000 | false 
backgroundColor | String | Black for DARK theme and white for LIGHT theme | false
containerStyle | ViewStyle | container with border and corner radius | false 
borderStyle | ViewStyle | border width - 1 and radius 10 | false 
position | Position | Position.TOP | false 
raised | boolean | true | false 
hideOnPress | boolean | true | false 


## Contributing

Any sort of issues is welcome. Please share the screenshot of the bug. If there are any errors, please share them as well. 

Pull requests are also appreciated. If you want to change the API, feel free to connect and discuss first.


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
