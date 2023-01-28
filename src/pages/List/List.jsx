import { useSearchParams } from "react-router-dom";
import { Pagination, Spin } from "antd";
import styles from "./List.module.scss";

import { useGetArticlesQuery } from "../../store/blog/blog.api";
import Card from "../../components/Card";

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const { isLoading, isError, data, error } = useGetArticlesQuery(
    Number(searchParams.get("page")),
  );

  return (
    <div className={styles.list}>
      {isLoading && <Spin />}
      {isError && error.message}
      {!isLoading &&
        data.articles.map((article) => (
          <Card key={article.slug} article={article} />
        ))}
      {!isLoading && (
        <Pagination
          className={styles.list__pagination}
          current={Number(searchParams.get("page"))}
          total={Math.ceil(data.articlesCount / 5)}
          pageSize={1}
          showSizeChanger={false}
          onChange={(value) => setSearchParams({ page: value })}
        />
      )}
    </div>
  );
}
