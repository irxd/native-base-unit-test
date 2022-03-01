import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Box
} from 'native-base';

describe('<Box />', () => {
  it('should render box component properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Box testID="my-box">Test Box</Box>
      </NativeBaseProvider>
    )

    expect(queryByTestId('my-box')).not.toBeNull()
  });

  it('should render box props properly', () => {
    const { queryByTestId } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Box testID="my-box" backgroundColor="white" borderColor="black" marginBottom={4}>Test Box</Box>
      </NativeBaseProvider>
    )
    
    expect(queryByTestId('my-box').props.style.backgroundColor).toMatch('#FFFFFF');
    expect(queryByTestId('my-box').props.style.borderColor).toMatch('#000000');
    expect(queryByTestId('my-box').props.style.marginBottom).toEqual(16);
  });
});
