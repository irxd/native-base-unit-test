import React from 'react';
import { render } from '@testing-library/react-native';
import {
  NativeBaseProvider, Radio
} from 'native-base';

describe('<Radio />', () => {
  const { queryByTestId } = render(
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      <Radio.Group testID="my-radio" defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
        <Radio value="1" my={1}>
          First
        </Radio>
        <Radio value="2" my={1}>
          Second
        </Radio>
        <Radio value="3" my={1}>
          Third
        </Radio>
      </Radio.Group>
    </NativeBaseProvider>
  )
  it('should render radio component properly', () => {
    expect(queryByTestId('my-radio')).not.toBeNull()
  });

})