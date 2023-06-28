import React, { useEffect, useState } from "react";
import "./footer.css";
import footer_phone from "../../assets/Images/common/footer-phone.png";
import footer_email from "../../assets/Images/common/footer-mail.png";
import factory_name from "../../assets/Images/common/factory-name.png";
import { useNavigate } from "react-router-dom";
import { handleClickToTop } from "../ScrollToTop/ScrollToTop";

function FooterComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const redirectPolicy = handleClickToTop(navigate, "/private-policy");

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
    <div className="footer">
      <div className="footer__above">
        <a href="tel:06-6844-7078" className="phone">
          <div className="text">
            <h3>06-6844-7078</h3>
            <p>
              【受付時間】9：00〜17：30　 <br />
              【定休日】日曜日・祝日
            </p>
          </div>
          <img src={footer_phone} alt="06-6844-7078" />
        </a>
        <a href="/contact" className="contact">
          <div className="text">
            <h3>Contact</h3>
            <p>お問い合わせ</p>
          </div>
          <img src={footer_email} alt="isamigiken@ybb.ne.jp" />
        </a>
      </div>
      <div className="footer__below">
        <div className="text__group">
          <a href="/">
            <img src={factory_name} alt="功美技建" />
          </a>
          <div className="footer__text">
            <p>〒560-0014　大阪府豊中市熊野町4-1-18</p>
            <p>
              TEL:
              <a href="tel:06-6844-7078">06-6844-7078</a>
              EMAIL:
              <a href="mailto:isamigiken@ybb.ne.jp">isamigiken@ybb.ne.jp</a>
            </p>
          </div>
        </div>
        <div className="footer__menu">
          {isMobile === false && (
            <ul>
              <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/renovation">施工事例</a>
              </li>
              <li>
                <a href="/simulation">料金シミュレーション</a>
              </li>
              <li>
                <a href="/about">会社概要</a>
              </li>
              <li>
                <a href="/recruit">採用情報</a>
              </li>
              <li>
                <a href="/news-lists">お知らせ</a>
              </li>
            </ul>
          )}

          <div className="policy">
            <a href="/private-policy" onClick={redirectPolicy}>
              プライバシーポリシー
            </a>
            <p>Copyright© Isamigiken Co.,ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
