import {
    EnhancedStore, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { ProfileSchema } from 'features/editableProfileCard';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI/model/types/UISchema';
import { rtkApi } from 'shared/api/rtlApi';

export interface StateSchema {
    user: UserSchema
    ui: UISchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    loginForm?:LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
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
