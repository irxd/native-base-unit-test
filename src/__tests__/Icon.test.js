import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, createIcon
} from 'native-base';
import { Circle } from "react-native-svg";

describe('<Icon />', () => {
  const CustomIcon = createIcon({
    viewBox: "0 0 36 36",
    path: [<Circle cx="18" cy="18" r="17.5" fill="#06B6D4" stroke="#0E7490" />, <Circle cx="18" cy="18" r="13.5" fill="white" stroke="#0E7490" />, <Circle cx="18" cy="18" r="9.5" fill="#06B6D4" stroke="#0E7490" />, <Circle cx="18" cy="18" r="5.5" fill="white" stroke="#0E7490" />]
  });

  const { queryByTestId } = render(
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <CustomIcon size={12} testID="my-icon" />
    </NativeBaseProvider>
  )
  it('should render icon component properly', () => {
    expect(queryByTestId('my-icon')).not.toBeNull()
  });
})