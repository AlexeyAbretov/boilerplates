/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-styled-components';

const {
  configure,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('enzyme');

// eslint-disable-next-line import/no-extraneous-dependencies
const Adapter = require('enzyme-adapter-react-16');

configure({
  adapter: new Adapter(),
});

global.alert = jest.fn();
