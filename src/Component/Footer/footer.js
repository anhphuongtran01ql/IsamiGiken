import React, { useEffect, useState } from "react";
import "./footer.css";
import { Col, Layout, Row } from "antd";
import footer_phone from "../../assets/Images/common/footer-phone.png";
import footer_email from "../../assets/Images/common/footer-mail.png";
import factory_name from "../../assets/Images/common/factory-name.png";
import { Link } from "react-router-dom";

const { Footer } = Layout;

function FooterComponent() {
  const [isMobile, setIsMobile] = useState(false);

  // create an event listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
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
    <Footer className="footer">
      <Row className="footer__contact">
        <Col xs={24} md={24} lg={12}>
          <Row className="footer__contact_phone">
            <Col className="footer__col" md={{ span: 20 }}>
              <Row className="footer__row">
                <h3 className="footer__heading">06-6844-7078</h3>
              </Row>
              <Row className="footer__row">
                <Col
                  className="footer__col_text"
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                >
                  <p className="footer__text">【受付時間】9：00〜17：30　</p>
                </Col>
                <Col
                  className="footer__col_text"
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                >
                  <p className="footer__text"> 【定休日】日曜日・祝日</p>
                </Col>
              </Row>
            </Col>
            <Col className="footer_col_image" md={{ span: 4 }}>
              <img
                className="footer__icon_image"
                src={footer_phone}
                alt="phone icon"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={24} lg={12}>
          <Row className="footer__contact_email">
            <Col className="footer__col" md={{ span: 20 }}>
              <Row className="footer__row">
                <h3 className="footer__heading">Contact</h3>
              </Row>
              <Row className="footer__row">
                <p className="footer__text">お問い合わせ</p>
              </Row>
            </Col>
            <Col className="footer_col_image" md={{ span: 4 }}>
              <img
                className="footer__icon_image"
                src={footer_email}
                alt="mail icon"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="footer__info">
        <Col xs={24} md={24} lg={12}>
          <Row className="footer__row_text">
            <Col className="footer__col_group" xs={{ span: 24 }}>
              <img
                className="footer__image"
                src={factory_name}
                alt="factory name"
              />
              <Row className="footer__row_text">
                <p className="footer__text" style={{ marginBottom: "0.8vw" }}>
                  〒560-0014　大阪府豊中市熊野町4-1-18
                </p>
                <p className="footer__text">TEL：06-6844-7078</p>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="footer__group" xs={{ span: 24 }} md={{ span: 12 }}>
          {isMobile ? (
            <>
              <Row
                className="footer__navbar"
                style={{ display: "flex", gap: "1.2vw", color: "white" }}
              >
                <a href="/" className="footer__navbar_item">
                  ホーム
                </a>
                <a href="/" className="footer__navbar_item">
                  施工事例
                </a>
                <a href="/" className="footer__navbar_item">
                  料金シミュレーション
                </a>
                <a href="/" className="footer__navbar_item">
                  会社概要
                </a>
                <a href="/" className="footer__navbar_item">
                  採用情報
                </a>
                <a href="/" className="footer__navbar_item">
                  お知らせ
                </a>
              </Row>
            </>
          ) : null}

          <Row className="footer__row_text">
            <Link
              to="/private-policy"
              style={{
                color: "white",
              }}
            >
              <p className="footer__text_policy">プライバシーポリシー</p>
            </Link>
          </Row>
          <Row className="footer__row_text">
            <p className="footer__text_copyright">
              Copyright© Isamigiken Co.,ltd. All Rights Reserved.
            </p>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterComponent;
