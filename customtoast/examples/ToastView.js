import React, { useState } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Toast, Position, Theme } from '../src/views';
import styles from './styles';

const {
  container,
  buttonStyle,
} = styles;

function ToastView(){
  const [message, setMessage] = useState(null);
  const [toastPosition, setToastPosition] = useState(null);
  const [toastTheme, setToastTheme] = useState(null);
  const [showChild, setShowChild] = useState(false);

  const showToast = () => {
    setMessage({ text: 'This is a custom Toast' });
  }

  const showToastAtTop = (isChild = false, theme = Theme.LIGHT) => {
    setShowChild(isChild);
    setToastTheme(theme);
    setToastPosition(Position.TOP);
    showToast();
  }

  const showToastAtBottom = () => {
    setToastPosition(Position.BOTTOM);
    showToast();
  }

  const showToastAtCenter = () => {
    setToastPosition(Position.CENTER);
    showToast();
  }

  const showToastAtPosition = (position) => {
    switch(position) {
      case Position.TOP:
        return showToastAtTop();
      case Position.CENTER:
        return showToastAtCenter();
      case Position.BOTTOM:
        return showToastAtBottom();
    }
  }

  const button = (position) => {
    return (
      <TouchableHighlight
        onPress={() => showToastAtPosition(position)}
        style={buttonStyle}
      >
        <Text>
          Show Toast At {position.toUpperCase()}
        </Text>
      </TouchableHighlight>
    );
  }

  const toggleThemeButton = () => {
    return (
      <TouchableHighlight
        onPress={() => {
          if (toastTheme === Theme.DARK) {
            showToastAtTop(false, Theme.LIGHT);
          } else {
            showToastAtTop(false, Theme.DARK);
          }
        }}
        style={styles.buttonStyle}
      >
        <Text>
          Change Toast Theme
        </Text>
      </TouchableHighlight>
    );
  }

  const toastWithChildButton = () => {
    return (
      <TouchableHighlight
        onPress={() => {
          showToastAtTop(true);
        }}
        style={styles.buttonStyle}
      >
        <Text>
          Show Toast With Children
        </Text>
      </TouchableHighlight>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={container}>
       {button(Position.BOTTOM)}
       {button(Position.TOP)}
       {button(Position.CENTER)}
       {toggleThemeButton()}
       {toastWithChildButton()}
      </ScrollView>
      <Toast
        message={message}
        position={toastPosition}
        theme={toastTheme}
      >  
      {showChild && <Text style>Test toast with children</Text>}
      </Toast>     
    </View>
  );
};

export default ToastView;
