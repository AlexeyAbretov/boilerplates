import React from 'react';

import {
    Loader,
} from './Loader';

export const AbsoluteLoader = (props) => (
    <Loader
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        position="absolute"
        width="200px"
        {...props}
    />
);
