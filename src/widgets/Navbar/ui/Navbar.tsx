import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';
import { useCallback, useState } from 'react';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [ isAuthModal, setIsAuthModal ] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [ className ])}>
            <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ad magnam accusantium eveniet
                saepe? Ipsa tempora fugit rerum,
                accusamus culpa autem ducimus, velit officiis sed eveniet, tempore voluptatum deserunt praesentium?
            </Modal>
        </div>
    );
};
