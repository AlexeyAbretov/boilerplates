import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import {
  Box,
} from '..';

describe('ui/atoms/Box', () => {
  test('Box should be rendered', () => {
    const component = renderer.create(
      <Box>It&apos;s the Box</Box>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Box should be rendered with border', () => {
    const component = renderer.create(
      <Box border="1px solid black">It&apos;s the Box</Box>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Box test click', () => {
    const wrapper = shallow(
      <Box onClick={() => alert('clicked')}>It&apos;s the Box</Box>,
    );

    wrapper.simulate('click');
    expect(global.alert).toHaveBeenCalledWith('clicked');
  });
});
