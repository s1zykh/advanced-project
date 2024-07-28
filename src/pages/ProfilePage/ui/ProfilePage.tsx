import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData, ProfileCard, profileReducer, getProfileLoading, getProfileError,
    profileActions,
    getProfileReadonly,
    getProfileForm,
    getProfileValidateErrors,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getUserAuthData } from 'entities/User';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const userAuthData = useSelector(getUserAuthData);

    const { id } = useParams<{id: string}>();

    useInitialEffect(() => {
        if (id && id === userAuthData?.id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [ dispatch ]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [ dispatch ]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [ dispatch ]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [ dispatch ]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [ dispatch ]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [ dispatch ]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [ dispatch ]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [ dispatch ]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [ className ])}>
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text theme={TextTheme.ERROR} text={error} key={error} />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
