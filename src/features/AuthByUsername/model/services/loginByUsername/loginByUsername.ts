import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkExtraArg, ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string,
    password: string
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
export default loginByUsername;
