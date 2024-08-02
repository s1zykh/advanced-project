import {
    EnhancedStore, ReducersMapObject, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { ProfileSchema } from 'entities/Profile';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AuthByUsername/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    user: UserSchema
    loginForm?:LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => MountedReducers;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg
    state: StateSchema
}
