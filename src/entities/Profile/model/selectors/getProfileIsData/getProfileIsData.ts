import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsData = (state: StateSchema) => state.profile?.data;
