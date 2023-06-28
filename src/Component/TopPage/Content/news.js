import React, { useEffect, useState } from "react";
import "./news.css";
import { useNavigate } from "react-router-dom";
import { handleClickToTop } from "../../ScrollToTop/ScrollToTop";

const items = [
  {
    id: 1,
    date: "2023年04月24日",
    text: "ニチハ株式会社様の金属製外壁材・屋根材総合カタログに掲載されました。",
  },

  {
    id: 2,
    date: "2023年04月24日",
    text: "サイトリニューアルのお知らせ",
  },
];

function News() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const redirectNews = handleClickToTop(navigate, "/news-lists");

  // create an event listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="news__container">
      <div className="news__wrapper">
        <div className="text">
          <h3 className="heading">News</h3>
          <p>お知らせ</p>
        </div>
        {isMobile ? null : (
          <a href="/news-lists" className="btn_pc" onClick={redirectNews}>
            一覧を見る
          </a>
        )}
      </div>

      <ul className="news__list">
        {items.map((item, index) => (
          <li key={index}>
            <time>{item.date}</time>
            <a href="/news-lists">{item.text}</a>
          </li>
        ))}
      </ul>

      {isMobile && (
        <a href="/news-lists" className="btn_mobile" onClick={redirectNews}>
          一覧を見る
        </a>
      )}
    </div>
  );
}

export default News;
