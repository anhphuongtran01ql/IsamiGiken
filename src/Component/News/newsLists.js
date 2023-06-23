import React, { useEffect } from "react";
import ImageCover from "../Header/imageCover";
import news_mv from "../../assets/Images/news/news_mv.jpg";
import "./newsLists.css";

const infoHeader = {
  image: news_mv,
  title: "News Lists",
  subTitle: "お知らせ",
};

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

function NewsLists() {
  useEffect(() => {
    document.title = "お知らせ一覧｜功美技建";
  }, []);

  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="news__lists container">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <time>{item.date}</time>
              <a href="/">{item.text}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default NewsLists;
