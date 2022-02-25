import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Text
} from 'native-base';

describe('<Text />', () => {
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
  it('should render text component properly', () => {
    expect(queryByTestId('my-text')).not.toBeNull()
  });

})