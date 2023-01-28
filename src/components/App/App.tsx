// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import List from "../../pages/List";
import Article from "../../pages/Article";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.navbar}>
        <Link className={styles.navbar__home} to="/">
          Realworld Blog
        </Link>
        <Link className={styles["navbar__sign-in"]} to="/sign-in">
          Sign In
        </Link>
        <Link className={styles["navbar__sign-up"]} to="/sign-up">
          Sign Up
        </Link>
      </header>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/articles" element={<List />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
