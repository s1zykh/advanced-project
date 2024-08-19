import { Profile } from 'entities/Profile';

import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ 'NO_DATA' as ValidateProfileError ];
    }

    const {
        first, lastname, age, country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push('INCORRECT_USER_DATA' as ValidateProfileError);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push('INCORRECT_AGE' as ValidateProfileError);
    }

    if (!country) {
        errors.push('INCORRECT_COUNTRY' as ValidateProfileError);
    }

    return errors;
};
