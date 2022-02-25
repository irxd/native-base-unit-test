import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Button
} from 'native-base';

describe('<Button />', () => {
  const { queryByTestId } = render(
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Button testID="my-button">Test</Button>
    </NativeBaseProvider>
  )
  it('should render button component properly', () => {
    expect(queryByTestId('my-button')).not.toBeNull()
  });

})