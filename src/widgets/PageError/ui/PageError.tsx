import { useTranslation } from 'react-i18next';
import React from 'react';

import cls from './ErrorPage.module.scss';

import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [ className ])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>

            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
