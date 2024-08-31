import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 22,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('should switch to the read state', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('Should the values be reset to zero when canceled', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        const fields = [
            { testId: 'ProfileCard.firstname', value: 'user' },
            { testId: 'ProfileCard.lastname', value: 'user' },
            { testId: 'ProfileCard.age', value: '5' },
            { testId: 'ProfileCard.city', value: 'Las Vegas' },
            { testId: 'ProfileCard.username', value: 'mrx' },
            { testId: 'ProfileCard.avatar', value: 'https://' },
        ];

        for (const field of fields) {
            await userEvent.clear(screen.getByTestId(field.testId));
            await userEvent.type(screen.getByTestId(field.testId), field.value);
        }

        for (const field of fields) {
            expect(screen.getByTestId(field.testId)).toHaveValue(field.value);
        }

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            profile.username,
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            profile.lastname,
        );
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue(
            `${profile.age}`,
        );
        expect(screen.getByTestId('ProfileCard.city')).toHaveValue(
            profile.city,
        );
        expect(screen.getByTestId('ProfileCard.username')).toHaveValue(
            profile.username,
        );
        expect(screen.getByTestId('ProfileCard.avatar')).toHaveValue(
            profile.avatar,
        );
    });

    test('"should it will appear an error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('Should send a PUT request to the server if there are no validation errors', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
