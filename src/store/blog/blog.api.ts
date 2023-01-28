import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle, IList } from "../../models";

const blogApi = createApi({
  reducerPath: "blog/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog.kata.academy/api/",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<IList, number>({
      query: (page: number) => ({
        url: "articles",
        params: {
          limit: 5,
          offset: page * 5 - 5,
        },
      }),
    }),
    getArticleBySlug: builder.query<IArticle, string | undefined>({
      query: (slug: string) => ({
        url: `articles/${slug}`,
      }),
      transformResponse: ({ article }) => article,
      transformErrorResponse: (error) => error.data,
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleBySlugQuery } = blogApi;
export default blogApi;
