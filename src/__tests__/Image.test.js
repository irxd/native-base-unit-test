import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Image
} from 'native-base';

describe('<Image />', () => {
  it('should render image component properly', () => {
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
    );

    expect(queryByTestId('my-image')).not.toBeNull()
  });

  it('should render image props properly', () => {
    const { queryByTestId, toJSON } = render(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <Image
          source={{ uri: "https://wallpaperaccess.com/full/317501.jpg"}}
          alt="Alternate Text"
          width={500}
          height={500}
          testID="my-image"
        />
      </NativeBaseProvider>
    );
    
    expect(queryByTestId('my-image').props.source.uri).toMatch("https://wallpaperaccess.com/full/317501.jpg");
    expect(queryByTestId('my-image').props.style.width).toEqual(500);
    expect(queryByTestId('my-image').props.style.height).toEqual(500);
    expect(toJSON()).toMatchSnapshot();
  });
});
