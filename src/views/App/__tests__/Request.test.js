import React from 'react';
import renderer from 'react-test-renderer';
import Request from '../../Request/Request';

it('should render request header correctly', () => {
    const tree = renderer.create(<Request />).toJSON();
    expect(tree).toMatchSnapshot();
});