import { Profile } from '@/entities/Profile';

export type ValidateProfileError =
            'INCORRECT_USER_DATA' |
            'INCORRECT_AGE' |
            'INCORRECT_COUNTRY' |
            'NO_DATA' |
            'SERVER_ERROR'

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
