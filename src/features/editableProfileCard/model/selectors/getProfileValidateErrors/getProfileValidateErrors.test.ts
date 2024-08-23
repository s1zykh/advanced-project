import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    'SERVER_ERROR' as ValidateProfileError,
                    'INCORRECT_AGE,' as ValidateProfileError,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            'SERVER_ERROR' as ValidateProfileError,
            'INCORRECT_AGE,' as ValidateProfileError,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
