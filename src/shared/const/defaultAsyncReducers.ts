import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line s1zykh-test-plugin/layer-imports
import { loginReducer } from '@/features/AuthByUsername';

export const defaulAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> =
    {
        loginForm: loginReducer,
    };
