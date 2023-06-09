import React, { useEffect, useState } from "react";
import "./header.css";
import { Col, Menu, Row } from "antd";
import MobileNavbar from "./mobileNavbar";
import logo from "../../assets/Images/common/header-logo.png";
import mail_icon from "../../assets/Images/common/header-mail.png";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    label: "ホーム",
    key: "",
  },
  {
    label: "施工事例",
    key: "renovation",
  },
  {
    label: "料金シミュレーション",
    key: "simulation",
  },
  {
    label: "会社概要",
    key: "about",
  },
  {
    label: "採用情報",
    key: "recruit",
  },
];

function HeaderComponent() {
  const [current, setCurrent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.key}`, { replace: true });
  };

  return (
    <Row className="header__row">
      <Col
        className="header__col_logo"
        sm={{ span: 12 }}
        md={{ span: 8 }}
        xl={{ span: 10 }}
      >
        <img className="image__logo" src={logo} alt="功美技建" />
      </Col>

      {isMobile ? (
        <MobileNavbar className="header__mobile-navbar" />
      ) : (
        <Col sm={{ span: 12 }} md={{ span: 16 }} xl={{ span: 14 }}>
          <Row className="header__row_navbar">
            <Col className="header__col_navbar" md={{ span: 18 }}>
              <Menu
                className="header__menu_navbar"
                onClick={onClick}
                mode="horizontal"
                items={items}
                selectedKeys={[current]}
              />
            </Col>

            <Col className="header__col_mail" md={{ span: 6 }}>
              <Link
                to="/contact-us"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={mail_icon} className="header__icon" alt="mail icon" />
                <span className="header__text">お問い合わせはこちら</span>
              </Link>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
}

export default HeaderComponent;
