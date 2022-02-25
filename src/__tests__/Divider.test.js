import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Divider
} from 'native-base';

describe('<Divider />', () => {
  const { queryByTestId } = render(
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Divider testID="my-divider" />
    </NativeBaseProvider>
  )
  it('should render divider component properly', () => {
    expect(queryByTestId('my-divider')).not.toBeNull()
  });

})