import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResourceKind, ResourceMap, SwapiListResponse } from './types';

const BASE_URL = '/api/';

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['List', 'Detail'],
  endpoints: (builder) => ({

    fetchResourceList: builder.query<
      SwapiListResponse<ResourceMap[keyof ResourceMap]>,
      { kind: ResourceKind; page?: number }
    >({
      query: ({ kind, page = 1 }) => `/${kind}/?page=${page}`,
      providesTags: (result, error, { kind, page }) => [
        { type: 'List', id: `${kind}-${page}` },
      ],
    }),

   
    fetchResourceDetail: builder.query<
      ResourceMap[keyof ResourceMap],
      { kind: ResourceKind; id: string }
    >({
      query: ({ kind, id }) => `/${kind}/${id}/`,
      providesTags: (result, error, { kind, id }) => [{ type: 'Detail', id: `${kind}-${id}` }],
    }),
  }),
});

export const {
  useFetchResourceListQuery,
  useFetchResourceDetailQuery,
} = swapiApi;
