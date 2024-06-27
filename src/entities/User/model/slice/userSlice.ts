import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: {
        id: 'sdad',
        username: 'Sizykh',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
export default userReducer;
