import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Box
} from 'native-base';

describe('<Box />', () => {
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
  it('should render box component properly', () => {
    expect(queryByTestId('my-box')).not.toBeNull()
  });

})