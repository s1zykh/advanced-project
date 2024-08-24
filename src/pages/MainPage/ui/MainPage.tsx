import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
