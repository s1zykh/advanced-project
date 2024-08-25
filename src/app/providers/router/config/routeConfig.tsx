import { RouteProps } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePageAsync } from "@/pages/ProfilePage/ui/ProfilePage.async";
import ArticleEditPage from "@/pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { UserRole } from "@/entities/User";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { AppRoutes, RoutePath } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

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
[AppRoutes.ARTICLE_CREATE]: {
  path: `${RoutePath.article_create}`,
  element: <ArticleEditPage />,
  authOnly: true,
},
[AppRoutes.ARTICLE_EDIT]: {
  path: `${RoutePath.article_edit}`,
  element: <ArticleEditPage />,
  authOnly: true,
},
[AppRoutes.ADMIN_PANEL]: {
  path: `${RoutePath.admin_panel}`,
  element: <AdminPanelPage />,
  roles: ["MANAGER" as UserRole, "ADMIN" as UserRole],
  authOnly: true,
},
[AppRoutes.FORBIDDEN]: {
  path: `${RoutePath.admin_panel}`,
  element: <ForbiddenPage/>,
},
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
