import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { SessionProvider } from './context/SessionProvider.tsx';
import LoginPage from './pages/LoginPage/components/LoginForm.tsx';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage.tsx';
import MoviePage from './pages/MoviePage/MoviePage.tsx';
import MyPage from './pages/MyPage/MyPage.tsx';
import OthersMyPage from './pages/MyPage/OthersMypage.tsx';
import SignUpPage from './pages/SignUpPage/components/SignUpForm.tsx';
import SearchPage from './pages/SearchPage/SearchPage.tsx';
import TimelinePage from './pages/TimelinePage/TimelinePage.tsx';
import { store } from './shared/store/store.ts';
import Layout from './Layout.tsx';
import './reset.css';
import ResultPage from './pages/SearchPage/Components/ResultPage.tsx';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SessionProvider>
        <Layout />
      </SessionProvider>
    ),
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/timeline',
        element: <TimelinePage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/movie',
        element: <MoviePage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetailPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/search',
        element: <SearchPage />,
        errorElement: <div>404 Not Found</div>,
      },
       {
        path: '/result',
        element: <ResultPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/notifications',
        element: <NotificationsPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/mypage',
        element: <MyPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/user/:userId',
        element: <OthersMyPage />,
        errorElement: <div>404 Not Found</div>,
      },
    ],
  },
  { path: '/signup', element: <SignUpPage />, errorElement: <div>404 Not Found</div> },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CookiesProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);