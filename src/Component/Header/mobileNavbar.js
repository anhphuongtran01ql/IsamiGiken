import React, { useState } from "react";
import "./header.css";
import { Button, Drawer, Layout, Menu, Row } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: "ホーム",
    key: "homepage",
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
    key: "recruitment",
  },
  {
    label: "お知らせ",
    key: "newsLists",
  },
];

function MobileNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

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
          <Menu className="header__drawer_menu" items={items} />
          <Row className="header__row_contact" style={{ width: "100%" }}>
            <Button className="header__row_button">
              <PhoneOutlined className="header__contact_icon" />
              <span className="header__contact_text">06-6844-7078</span>
            </Button>
            <Button className="header__row_button">
              <MailOutlined className="header__contact_icon" />
              <span className="header__contact_text">お問い合わせはこちら</span>
            </Button>
          </Row>
        </Row>
      </Drawer>
    </>
  );
}

export default MobileNavbar;
