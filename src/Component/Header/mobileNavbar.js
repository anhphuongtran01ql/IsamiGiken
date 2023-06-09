import React, { useState } from "react";
// import "./header.css";
import "./mobileNavbar.css";
import { Button, Drawer, Menu, Row } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import mail_icon from "../../assets/Images/common/header-mail.png";
import phone_icon from "../../assets/Images/common/header-phone.png";
import { useNavigate } from "react-router-dom";

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
  {
    label: "お知らせ",
    key: "news-lists",
  },
];

function MobileNavbar() {
  const [current, setCurrent] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.key}`, { replace: true });
    setOpenMenu(false);
  };

  const showDrawer = () => {
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <Button className="header__button_menu" size="large" onClick={showDrawer}>
        <MenuOutlined className="header__icon_menu" />
      </Button>

      <Drawer
        style={{ position: "fixed" }}
        width="100vw"
        height="100%"
        className="header__drawer"
        placement="right"
        onClose={onCloseMenu}
        open={openMenu}
        closeIcon={<CloseOutlined className="header__icon_close" />}
      >
        <Row className="header__row_menu">
          <Menu
            className="header__drawer_menu"
            items={items}
            selectedKeys={[current]}
            onClick={onClick}
          />
          <Row className="header__row_contact" style={{ width: "100%" }}>
            <Button className="header__row_button">
              <img
                src={phone_icon}
                className="header__icon_mobile"
                alt="phone icon"
              />
              <span className="header__contact_text">06-6844-7078</span>
            </Button>
            <Button className="header__row_button">
              <img
                src={mail_icon}
                className="header__icon_mobile"
                alt="mail icon"
              />
              <span className="header__contact_text">お問い合わせはこちら</span>
            </Button>
          </Row>
        </Row>
      </Drawer>
    </>
  );
}

export default MobileNavbar;
