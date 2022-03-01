import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Text
} from 'native-base';

describe('<Text />', () => {
  it('should render text component properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Text testID="my-text">hello world</Text>
      </NativeBaseProvider>
    )

    expect(queryByTestId('my-text')).not.toBeNull()
  });

  it('should render text props properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Text testID="my-text" fontWeight="bold" color="white">hello world</Text>
      </NativeBaseProvider>
    )
    
    expect(queryByTestId('my-text').props.style.fontWeight).toMatch('700');
    expect(queryByTestId('my-text').props.style.color).toMatch('#FFFFFF');
  });
})
