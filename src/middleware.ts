import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		'/((?!api|trpc|_next|_vercel|.*\\..*).*)',

		// Match all pathnames within `{/:locale}/users`
		'/([\\w-]+)?/users/(.+)',
	],
};

// import NextAuth from "next-auth";
// import createMiddleware from "next-intl/middleware";

// import {
//   DEFAULT_LOGIN_REDIRECT,
//   apiAuthPrefix,
//   authRoutes,
//   publicRoutes,
// } from "@/routes";
// import { routing } from "./i18n/routing";
// import authConfig from '../auth.config';

// const { auth } = NextAuth(authConfig);
// const intlMiddleware = createMiddleware(routing);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isAuthorized = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   // Пропускаем API маршруты без обработки
//   if (isApiAuthRoute) {
//     return null;
//   }

//   // Если пользователь уже авторизован, редирект с login/signup
//   if (isAuthRoute && isAuthorized) {
//     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//   }

//   // Если страница не публичная и юзер не авторизован — редирект на login
//   if (!isAuthorized && !isPublicRoute) {
//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) {
//       callbackUrl += nextUrl.search;
//     }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);
//     return Response.redirect(
//       new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
//     );
//   }

//   // После обработки authMiddleware вызываем intlMiddleware
//   return intlMiddleware(req);
// });

// // Совмещаем matchers
// export const config = {
//   matcher: [
//     // Общие пути для обеих middleware
//     "/((?!.+\\.[\\w]+$|_next|_vercel).*)",
//     "/",
//     "/(api|trpc)(.*)",

//     // Пути для интернационализации
//     "/([\\w-]+)?/users/(.+)",
//   ],
// };
