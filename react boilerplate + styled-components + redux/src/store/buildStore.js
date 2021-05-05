import { 
    createStore, 
    applyMiddleware, 
    compose,
} from 'redux';

export const buildStore = ({
  reducer = () => ({ }),
  isDebugMode = false,
  storeDebugName = 'my_app',
  middlewares = []
} = {}) => {
    const composeEnhancers = isDebugMode &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: storeDebugName,
            trace: true,
            traceLimit: 25
        }) :
        compose;

    if (!isDebugMode && typeof window !== 'undefined' &&
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => { };
    }

    const store = isDebugMode ?
        createStore(
            reducer(),
            composeEnhancers(
                applyMiddleware(
                    ...middlewares || [],
                )
            )
        ) :
        createStore(
            reducer(),
            applyMiddleware(
                ...middlewares || [],
            )
        );

    return store;
};