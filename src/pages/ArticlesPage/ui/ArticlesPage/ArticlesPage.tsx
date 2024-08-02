import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    getArticles,
    articlesPageActions,
    articlesPageReducer,
}
    from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import {
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageView,
}
    from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [ dispatch ]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [ dispatch ]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [ className ])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
