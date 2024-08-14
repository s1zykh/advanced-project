import {
    AnyAction,
    ReducersMapObject,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit';

import {
    StateSchemaKey,
    StateSchema,
    ReducerManager,
    MountedReducers,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedRecusers: MountedReducers = {};

    return {
        getReducerMap: () => mountedRecusers,

        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            // console.log('2');

            reducers[key] = reducer;
            mountedRecusers[key] = true;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            // console.log(3);

            delete reducers[key];
            keysToRemove.push(key);
            mountedRecusers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
