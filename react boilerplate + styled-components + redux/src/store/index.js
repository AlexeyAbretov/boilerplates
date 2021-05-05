import { buildStore } from './buildStore';
import rootReducer from './reducers'

let store = null;

export const getStore = () => store;

export const getState = () => getStore()?.getState() || {};

export default () => {
    if (store) {
      return store;
    }
  
    store = buildStore({
        reducer: rootReducer,
        // TODO: implement custom logic
        isDebugMode: true,
        // TODO: set custom name
        // storeDebugName: ''
    });
  
    return store;
};
