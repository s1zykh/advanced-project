import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (!articles || isLoading || error) {
        return null;
    }
    return (
        <VStack gap="8" className={classNames('', {}, [ className ])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
});
