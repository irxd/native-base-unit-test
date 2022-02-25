import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Image
} from 'native-base';

describe('<Image />', () => {
  const { queryByTestId } = render(
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/317501.jpg"}}
        alt="Alternate Text"
        size="xl"
        testID="my-image"
      />
    </NativeBaseProvider>
  )
  it('should render image component properly', () => {
    expect(queryByTestId('my-image')).not.toBeNull()
  });

})