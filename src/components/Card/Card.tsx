import { Tag } from "antd";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import { IArticle } from "../../models";
import styles from "./Card.module.scss";
import LikeBtn from "../LikeBtn";

export default function Card({
  article,
  nocollapse,
}: {
  article: IArticle;
  nocollapse: boolean;
}) {
  const {
    author,
    description,
    body,
    createdAt,
    favoritesCount,
    slug,
    tagList,
    title,
  } = article;

  return (
    <div className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__caption}>
          <h1 className={styles.card__title}>
            <Link className={styles.card__link} to={`/articles/${slug}`}>
              {title}
            </Link>
          </h1>
          <div className={styles.card__likes}>
            <LikeBtn />
            <span className={styles["card__likes-count"]}>
              {favoritesCount}
            </span>
          </div>
          <div className={styles.card__tags}>
            {tagList?.map((tag: string) => (
              <Tag className={styles.card__tag} key={uuidv4()}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <div className={styles.card__author}>
          <div className={styles["card__author-name"]}>{author.username}</div>
          <div className={styles["card__create-date"]}>
            {format(new Date(createdAt), "PPP")}
          </div>
          <div className={styles["card__author-image"]}>
            <img
              className={styles["card__author-avatar"]}
              src={author.image}
              alt="Avatar"
            />
          </div>
        </div>
        <p
          className={`
          ${styles.card__description} 
          ${nocollapse && styles["card__description--muted"]}
          `}
        >
          {description}
        </p>
      </header>
      {nocollapse && (
        <ReactMarkdown className={styles.card__body}>{body}</ReactMarkdown>
      )}
    </div>
  );
}
