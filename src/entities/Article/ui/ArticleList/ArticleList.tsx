import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo, useRef } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/types/article';
import type { Article } from '../../model/types/article';

import { Text, TextSize } from '@/shared/ui/deprecated/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation();

    const containerRef = useRef<HTMLDivElement | null>(null);

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }
    const rowRender = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            target={target}
            key={`str${index}`}
            className={cls.card}
        />
    );

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            ref={containerRef}
            data-testid="ArticleList"
        >
            {isLoading ? (
                <>{getSkeletons(view)}</>
            ) : virtualized ? (
                <VirtuosoGrid
                    data={articles}
                    totalCount={articles.length}
                    itemContent={rowRender}
                    style={{ height: '700px', width: '100%' }}
                    useWindowScroll
                    className={cls.virtuosoList}
                    customScrollParent={containerRef.current ?? undefined}
                    listClassName={cls.articles_grid}
                />
            ) : (
                articles.map((item) => rowRender(articles.indexOf(item), item))
            )}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
