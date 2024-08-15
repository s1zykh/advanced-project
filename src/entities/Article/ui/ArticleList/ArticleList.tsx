import React, { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListItemProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = (props: ArticleListItemProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} target={target} view={view} className={cls.card} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
            {
                articles.length > 0 ? articles.map(renderArticle) : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
};
