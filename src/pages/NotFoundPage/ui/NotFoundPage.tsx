import { useTranslation } from 'react-i18next';
import React from 'react';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </div>
    );
};
