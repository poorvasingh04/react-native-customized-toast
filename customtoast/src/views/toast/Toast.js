import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  container,
  textStyle,
} from './styles';

import AppConstants from '../../resources/AppConstants';
import { Position } from './Position';
import Theme from './theme';

function Toast({
  theme,
  message,
  children,
  messageColor,
  messageStyle,
  messageFontSize,
  duration,
  backgroundColor,
  containerStyle,
  borderStyle,
  position,
  raised,
  hideOnPress,
  ...otherProps
}) {
  const [tempMessage, setTempMessage] = useState(message);
  const [timer, setTimer] = useState(null);

  const { text } = message || {};

  useEffect(() => {
     
    let cancel = false;
    const runEffect = async () => {      
      if (cancel) {
        return;
      }

      setTempMessage(message);

      if (duration === 0) return;
      const timer = setTimeout(() => {
        hideToast();
      }, duration);
      
      setTimer(timer);
    };
    runEffect();
  
    return () => {
      cancel = true;
      clearTimeout(timer);
    }
  }, [message]);

  const hideToast = () => {
    clearTimeout(timer);
    setTempMessage(null);
  }

  const styleForContainer = () => {
    return container(
      theme,
      backgroundColor,
      containerStyle,
      borderStyle,
      position,
      true
    );
  }

  const styleForText = () => {
    return textStyle(
      messageColor,
      messageFontSize,
      messageStyle
    );
  }

  const toastView = () => {
    const activeOpacity = hideOnPress ? 0.2 : 1;
    return (
      <TouchableOpacity
        style={styleForContainer()}
        onPress={() => {
          if (hideOnPress) hideToast();
        }}
        activeOpacity={activeOpacity}
        {...otherProps}
      >
        <View>
          <Text
            style={styleForText()}
          >
            {text}
          </Text>
          {children}
        </View>
      </TouchableOpacity>
    );
  }

  const toast = () => {
    if(!tempMessage) {
      return null;
    }

    return toastView();
  }

  return toast();
}

export default Toast;

Toast.propTypes = {
  theme: PropTypes.string,
  message: PropTypes.instanceOf(Object),
  duration: PropTypes.number,
  position: PropTypes.string,
  raised: PropTypes.bool,
  children: PropTypes.node,
  messageColor: PropTypes.string,
  messageStyle: Text.propTypes.style,
  messageFontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  borderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  hideOnPress: PropTypes.bool,
};

Toast.defaultProps = {
  theme: Theme.LIGHT,
  message: null,
  duration: AppConstants.TOAST_DURATION,
  position: Position.TOP,
  raised: true,
  children: null,
  messageColor: null,
  messageStyle: null,
  messageFontSize: null,
  backgroundColor: null,
  containerStyle: null,
  borderStyle: null,
  hideOnPress: true
};