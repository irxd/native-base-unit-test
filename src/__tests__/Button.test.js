import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  NativeBaseProvider, Button
} from 'native-base';

describe('<Button />', () => {
  it('should render button component properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Button testID="my-button">Test</Button>
      </NativeBaseProvider>
    );

    expect(queryByTestId('my-button')).not.toBeNull()
  });

  it('should render button props properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Button testID="my-button" backgroundColor="white" borderRadius={8}>Test</Button>
      </NativeBaseProvider>
    );

    expect(queryByTestId('my-button').props.style.backgroundColor).toMatch('#FFFFFF');
    expect(queryByTestId('my-button').props.style.borderRadius).toEqual(8);
  });

  it('button event should working properly', () => {
    const onPressEvent = jest.fn();

    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Button testID="my-button" onPress={onPressEvent}>Test</Button>
      </NativeBaseProvider>
    );

    fireEvent.press(queryByTestId('my-button'));
    expect(onPressEvent).toHaveBeenCalled();
  });
});
