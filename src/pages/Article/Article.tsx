import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { useGetArticleBySlugQuery } from "../../store/blog/blog.api";
import Card from "../../components/Card";
import styles from "./Article.module.scss";

export default function Article() {
  const { slug } = useParams();
  const {
    isLoading,
    isError,
    data: article,
    error,
  } = useGetArticleBySlugQuery(slug);

  return (
    <>
      {isLoading && <Spin className={styles.loader} />}
      {isError && error}
      {!isLoading && article && <Card article={article} nocollapse />}
    </>
  );
}
