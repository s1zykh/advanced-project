import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername';

export const defaulAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};
