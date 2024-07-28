import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, number | string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Нет такого профиля');
        }
    },
);
