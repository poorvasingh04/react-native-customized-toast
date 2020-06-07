import React, { ReactNode } from 'react';

declare module "react-native-customized-toast" {
 
  /**
   * Defines theme for toast
   * Two themes supported are - light and dark
   *
   * @export
   * @interface Theme
   */
  export interface Theme {
    LIGHT: string;
    DARK: string;
  }

   /**
   * Defines position of Toast on view 
   * It can be at the top, center or bottom of screen
   *
   * @export
   * @interface Position
   */
  export interface Position {
    TOP: string;
    CENTER: string;
    BOTTOM: string;
  }

  /**
   * Defines default fonts provided by library
   * can vary from Small to XLarge
   *
   * @export
   * @interface ToastFont
   */
  export interface ToastFont {
    SMALL: number;
    MEDIUM: number;
    LARGE: number;
    XLARGE: number;
  }

  /**
   * Defines format of message expected by Toast component
   *
   * @export
   * @type Message
   */
  export type Message = {
    text?: string;
  }

  /**
   * Defines props supported by Toast component
   *
   * @export
   * @type ToastProps
   */
  export type ToastProps = {
    /** accepts supported theme for the toast - defaults to Theme.LIGHT */
    theme?: Theme;

    /** accepts text of type Message only */
    message?: Message;

    /** supports children to be displayed along with the toast message */
    children?: ReactNode;

    /**
    * toast accepts custom message color
    * defaults to Red
    */
    messageColor?: string;

    /** accepts custom style for Toast message */
    messageStyle?: StyleProp<TextStyle>;

    /** accepts custom font size for Toast message */
    messageFontSize?: number;

    /** 
     * duration for the toast
     * defaults to 5 seconds
     * set duration to 0 to switch off automatic hiding if toast
    */
    duration?: number;

    /**
    * background color of toast
    * defaults to white for LIGHT theme
    * defaults to black for DARK theme
    */
    backgroundColor?: string;

    /** custom style for Toast container */
    containerStyle?: StyleProp<ViewStyle>;

    /** accepts custom border style for Toast */
    borderStyle?: StyleProp<ViewStyle>;

    /**
    * position of Toast to be rendered on screen
    * defaults to TOP
    */
    position?: Position;

    /**
    * If raised - shows shadow around the toast
    * defaults to true
    */
    raised?: boolean;

    /**
    * If true - hides toast on press
    * defaults to true
    */
    hideOnPress?: boolean;
  };

  /**
   * export Toast which accepts props of type ToastProps
   *
   * @export
   * @param {ToastProps} props
   */
  export const Toast: (props: ToastProps) => React.SFC<ToastProps>
}