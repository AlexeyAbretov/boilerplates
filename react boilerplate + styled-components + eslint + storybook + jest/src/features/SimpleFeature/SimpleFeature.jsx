import React, { useState  } from 'react';

export const SimpleFeature = () => {
    const [isMessageVisible, setMessageVisible] = useState(false);

    return (
        <>
            <button
                datа-testid="simple-feature-button"
                onClick={() => setMessageVisible(true)}
            >
                Click me!!!
            </button>
            <div
                style={{display: isMessageVisible ? 'block' : 'none'}}
                datа-testid="simple-feature-message"
            >
                Message!!!
            </div>
        </>
    )
}