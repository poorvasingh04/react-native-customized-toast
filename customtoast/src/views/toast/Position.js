import AppConstants from '../../resources/AppConstants';

const {
  TOAST_POSITION,
} = AppConstants;

const Position = {
  TOP: 'TOP',
  CENTER: 'CENTER',
  BOTTOM: 'BOTTOM',
};

const positionStyle = (position = Position.TOP) => {
  const { TOP, CENTER, BOTTOM } = Position;

  switch(position) {
    case TOP:
      return {
        top: TOAST_POSITION,
      };
    case CENTER:
      return {
        top: '40%',
      };
    case BOTTOM:
      return {
        bottom: TOAST_POSITION,
      };
    default:
      return {
        top: TOAST_POSITION,
      };
  }
}

export {
  Position,
  positionStyle,
};