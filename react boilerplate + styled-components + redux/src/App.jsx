import React from 'react';
import { Provider } from 'react-redux';

import { CounterContainer } from 'features';

import createStore from './store';

const store = createStore();

export const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
)