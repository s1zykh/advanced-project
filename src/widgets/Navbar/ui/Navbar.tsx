import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername/ui/LoginfModal/LoginModal';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [ isAuthModal, setIsAuthModal ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [ dispatch ]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [ className ])}>
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [ className ])}>
            <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
