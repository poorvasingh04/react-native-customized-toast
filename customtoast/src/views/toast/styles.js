import Colors from '../../resources/Colors';
import FontSize from '../../resources/FontSize';
import { positionStyle } from './Position';
import AppConstants from '../../resources/AppConstants';
import Theme from './theme';

const {
  dark,
  message,
  light,
} = Colors;

const {
  MEDIUM,
} = FontSize;

const {
  TOAST_PADDING,
  TOAST_BORDER_RADIUS,
  TOAST_BORDER_WIDTH,
  TOAST_LEFT,
  TOAST_RIGHT,
  SHADOW_OFFSET_WIDTH,
  SHADOW_OFFSET_HEIGHT,
  SHADOW_OPACITY,
  SHADOW_RADIUS,
} = AppConstants;

const borderStyle = {
  borderColor: dark,
  borderWidth: TOAST_BORDER_WIDTH,
  borderRadius: TOAST_BORDER_RADIUS,
};

const containerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  padding: TOAST_PADDING,
  left: TOAST_LEFT,
  right: TOAST_RIGHT,
};

const raisedStyle = (raised) => {
  if (!raised) return null;
  return {
    shadowOffset: {
      width: SHADOW_OFFSET_WIDTH,
      height: SHADOW_OFFSET_HEIGHT,
    },
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
  };
};

const styleForTheme = (theme, color) => {
  if (theme === Theme.LIGHT) {
    return {
      backgroundColor: color || light,
      borderColor: dark,
    };
  } else {
    return {
      backgroundColor: color || dark,
      borderColor: light,
    };
  }
}

const container = (
  theme,
  color,
  customContainerStyle,
  customBorderStyle,
  position,
  raised,
) => {
  return {
    ...styleForTheme(theme, color),
    ...positionStyle(position),
    ...containerStyle,
    ...borderStyle,
    ...raisedStyle(raised),
    ...customBorderStyle,
    ...customContainerStyle,
  };
};

const textStyle = (color, fontSize, style) => {
  return {
    color: color || message,
    fontSize: fontSize || MEDIUM,
    ...style,
  };
};

export {
  container,
  textStyle,
};