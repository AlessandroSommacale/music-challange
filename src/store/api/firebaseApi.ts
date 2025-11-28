import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface getUserFavoritesArg {
  userId: string;
}

interface putUserFavoritesArg {
  userId: string;
  favorites: string[];
}

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://music-challange-dfd5c-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  tagTypes: ['Favorites'],
  endpoints: (builder) => ({
    getUserFavorites: builder.query<string[], getUserFavoritesArg>({
      query: (queryArg) => `/${queryArg.userId}.json`,
      providesTags: ['Favorites'],
    }),
    setUserFavorites: builder.mutation<string[], putUserFavoritesArg>({
      query: (queryArg) => ({
        url: `/${queryArg.userId}.json`,
        method: 'PUT',
        body: queryArg.favorites,
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const { useGetUserFavoritesQuery, useSetUserFavoritesMutation } = firebaseApi;
