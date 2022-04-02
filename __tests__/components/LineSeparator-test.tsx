import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import LineSeparator from '../../app/components/LineSeparator';

describe('LineSeparator', () => {
  const getRender = (): RenderAPI => render(<LineSeparator />);

  it('Jest snapshot', async () => {
    const json = await getRender().toJSON();
    expect(json).toMatchSnapshot();
  });
});
