import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import news_mv from "../../assets/Images/news/news_mv.jpg";
import { Link } from "react-router-dom";
import "./newsLists.css";

const infoHeader = {
  image: news_mv,
  title: "News Lists",
  subTitle: "採用情報",
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
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <div className="news-lists__container">
        {items.map((item, index) => (
          <Row key={index}>
            <Col span={24} className="news-lists__span_group">
              <p className="news-lists__span_date">{item.date}</p>
              <Link to="/" style={{ color: "black" }}>
                <p className="new-lists__span_text">{item.text}</p>
              </Link>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default NewsLists;
