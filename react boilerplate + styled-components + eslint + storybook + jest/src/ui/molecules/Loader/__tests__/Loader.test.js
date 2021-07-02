import React from 'react';
import renderer from 'react-test-renderer';

import { Loader, AbsoluteLoader } from '..';

describe('ui/atoms/Loader', () => {
  it('should be rendered', () => {
    const tree = renderer.create(<Loader isVisible />);
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered with overlay', () => {
    const tree = renderer.create(<Loader isVisible  overlayProps={{}} />);
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered as absolute', () => {
    const tree = renderer.create(<AbsoluteLoader isVisible  />);
    expect(tree).toMatchSnapshot();
  });

  test('should not be rendered without params', () => {
    const tree = renderer.create(<Loader />);
    expect(tree).toMatchSnapshot();
  });

  test('should not be rendered', () => {
    const tree = renderer.create(<Loader isVisible={false} />);
    expect(tree).toMatchSnapshot();
  });
});
