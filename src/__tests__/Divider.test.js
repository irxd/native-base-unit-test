import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Divider
} from 'native-base';

describe('<Divider />', () => {
  it('should render divider component properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Divider testID="my-divider" />
      </NativeBaseProvider>
    );

    expect(queryByTestId('my-divider')).not.toBeNull();
  });

  it('should render divider props properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Divider testID="my-divider" backgroundColor="black" thickness={2}/>
      </NativeBaseProvider>
    );

    expect(queryByTestId('my-divider').props.style.backgroundColor).toMatch('#000000');
    expect(queryByTestId('my-divider').props.style.height).toEqual(2);
  });
});
