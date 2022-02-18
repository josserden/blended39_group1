import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';
// import { HomePage } from 'pages/HomePage';
// import { MovieDetailsPage } from 'pages/MovieDetailsPage';
// import { Cast } from './Cast/Cast';
// import { Reviews } from 'components/Reviews';
import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

const Cast = lazy(() =>
  import('./Cast').then(module => ({ default: module.Cast }))
);

const Reviews = lazy(() =>
  import('./Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/" element={<MoviesPage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
