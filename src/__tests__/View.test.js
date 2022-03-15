import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  NativeBaseProvider, View
} from 'native-base';

describe('<View />', () => {
  it('should render view component properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <View testID="my-view">Test View</View>
      </NativeBaseProvider>
    )

    expect(queryByTestId('my-view')).not.toBeNull()
  });

  it('should render view props properly', () => {
    const { queryByTestId, toJSON } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <View
          testID="my-view"
          backgroundColor="white"
          borderColor="black"
          marginBottom={4}
        >
          Test View
        </View>
      </NativeBaseProvider>
    )
    
    expect(queryByTestId('my-view').props.style.backgroundColor).toMatch('#FFFFFF');
    expect(queryByTestId('my-view').props.style.borderColor).toMatch('#000000');
    expect(queryByTestId('my-view').props.style.marginBottom).toEqual(16);
    expect(toJSON()).toMatchSnapshot();
  });

  it('view event should working properly', () => {
    const onPressEvent = jest.fn();

    const { queryByTestId, toJSON } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <View
          testID="my-view"
          backgroundColor="white"
          borderColor="black"
          marginBottom={4}
          onPress={onPressEvent}
        >
          Test View
        </View>
      </NativeBaseProvider>
    )
    
    fireEvent.press(queryByTestId('my-view'));
    expect(onPressEvent).toHaveBeenCalled();
    expect(queryByTestId('my-view').props.style.backgroundColor).toMatch('#FFFFFF');
    expect(queryByTestId('my-view').props.style.borderColor).toMatch('#000000');
    expect(queryByTestId('my-view').props.style.marginBottom).toEqual(16);
    expect(toJSON()).toMatchSnapshot();
  });
});
