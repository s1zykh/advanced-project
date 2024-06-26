import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { StateSchema } from './StateSchema';

export function craeteReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
