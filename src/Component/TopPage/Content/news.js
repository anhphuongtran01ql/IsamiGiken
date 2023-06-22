import { Button, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./news.css";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    date: "2022.12.01",
    tag: "カテゴリー",
    text: "お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル",
  },

  {
    id: 2,
    date: "2022.12.01",
    tag: "カテゴリー",
    text: "お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル",
  },

  {
    id: 3,
    date: "2022.12.01",
    tag: "カテゴリー",
    text: "お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル",
  },
  {
    id: 4,
    date: "2022.12.01",
    tag: "カテゴリー",
    text: "お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル",
  },
  {
    id: 5,
    date: "2022.12.01",
    tag: "カテゴリー",
    text: "お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル",
  },
];

function News() {
  const [isMobile, setIsMobile] = useState(false);

  // create an event listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <769) {
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
    <div>
      <Row className="news__container">
        <Col xs={24} sm={24} md={6} className="new__button_heading">
          <Row>
            <Col span={24} className="news__text-group">
              <h3 className="news__heading">News</h3>
              <p className="news__text">お知らせ</p>
            </Col>
          </Row>
          {isMobile ? null : (
            <Row>
              <Col span={24}>
                <Link to="/news-lists">
                  <Button className="news__button">
                    一覧を見る <RightOutlined className="new__button_icon" />
                  </Button>
                </Link>
              </Col>
            </Row>
          )}
        </Col>

        <Col xs={20} sm={24} md={18}>
          {items.map((item, index) => (
            <Row key={index}>
              <Col span={24} className="news__span_group">
                <span className="news__span_date">{item.date}</span>
                {isMobile ? null : (
                  <span className="news__span_tag">{item.tag}</span>
                )}
                <span className="new__span_text">{item.text}</span>
              </Col>
            </Row>
          ))}
        </Col>
        {isMobile ? (
          <>
            <Col span={24}>
              <Link to="/news-lists">
                <Button
                  className="news__button_mobile"
                  //   style={{
                  //     width: "100%",
                  //     justifyContent: "center",
                  //     marginTop: "2.5vw",
                  //   }}
                >
                  一覧を見る <RightOutlined className="new__button_icon" />
                </Button>
              </Link>
            </Col>
          </>
        ) : null}
      </Row>
    </div>
  );
}

export default News;
