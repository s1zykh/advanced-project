import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePageAsync } from "pages/ProfilePage/ui/ProfilePage.async";

import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  PROFILE = "profile",
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile/",  // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
},
[AppRoutes.PROFILE]: {
  path: `${RoutePath.profile}:id`,
  element: <ProfilePageAsync/>,
  authOnly: true,
},
[AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
},
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
