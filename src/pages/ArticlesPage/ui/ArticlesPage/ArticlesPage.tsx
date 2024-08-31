import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    articlesPageReducer,
}
    from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
    getArticlesPageView,
}
    from '../../model/selectors/articlesPageSelectors';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilter/ArticlesPageFilters';

import { Page } from '@/widgets/Page';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const [ searchParams ] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [ dispatch ]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [ className ])} data-testid="ArticlesPage">
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
