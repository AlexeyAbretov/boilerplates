import React from 'react'
import { connect } from 'react-redux';

import { Counter } from '../components/Counter';
import { actions } from '../store/reducer';

import {
  CounterContainerProps,
} from '../store/selectors';

export const CounterContainer = connect(
  CounterContainerProps,
  (dispatch) => ({
    onDecrement: () => dispatch(actions.decrement()),
    onIncrement: () => dispatch(actions.increment()),
  })
)(Counter);

