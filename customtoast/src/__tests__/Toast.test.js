import React from 'react';
import {shallow} from 'enzyme';
import { TouchableOpacity } from 'react-native';
import { Toast } from '../views';

describe('Toast unit tests------', () => {
  var wrapper;
  var useEffect;
  var props;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    props = {
      message: { text: 'Test toast' },
    };
    mockUseEffect();
    mockUseEffect();
    wrapper = shallow(<Toast {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hide toast', () => {
    let component = shallow(<Toast />);
    expect(component.find(TouchableOpacity).length).toBe(0);
  });

  it('should show toast', () => {
    expect(props.message).toEqual({ text: 'Test toast' });
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
  });

  it('should update toast message', () => {
    const message = { text: 'Update toast' };
    wrapper.setProps({ message });
    const Text = wrapper.find('Text');
    expect(Text.length).toBe(1);
    expect(Text.props().children).toEqual('Update toast'); 
  });

  it('should hide toast on tap', () => {
    const button = wrapper.find(TouchableOpacity);
    button.props().onPress();
    expect(wrapper.find(TouchableOpacity).length).toBe(0);
  });

});
