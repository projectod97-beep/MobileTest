import React from 'react';
import { render } from '@testing-library/react-native';
import MyButton from '../components/MyButton';

test('рender buttons', () => {
  const { getByText } = render(<MyButton title="Click" />);
  expect(getByText('Click')).toBeTruthy();
});