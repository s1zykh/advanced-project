import { StateSchema } from 'app/providers/StoreProvider';
import loginReducer from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersMapObject } from '@reduxjs/toolkit';

export const defaulAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
