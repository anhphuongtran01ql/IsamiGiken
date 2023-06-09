import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import recruit_mv from "../../assets/Images/recruit/recruit_mv.jpg";
import "./recruitment.css";

const infoHeader = {
  image: recruit_mv,
  title: "Recruit",
  subTitle: "採用情報",
};

const items = [
  {
    id: 1,
    title: "雇用形態",
    text: "正社員",
  },
  {
    id: 2,
    title: "勤務時間",
    text: "9:00〜17:00 ※現場の状況によります。",
  },
  {
    id: 3,
    title: "仕事内容",
    text: "工事は屋根・外壁の補修、雨漏り修理リフォームが中心です。",
  },
  {
    id: 4,
    title: "事業内容",
    text: "屋根・外壁専門工事",
  },
  {
    id: 1,
    title: "その他",
    text: `施工の質にこだわった仕事は終わったあとも気持ちいい!!
    最高級の充実感が得られる職場!!`,
  },
  {
    id: 6,
    title: "給与",
    text: "月給 : 25万円以上 ※施工管理の資格がある方は優遇あり",
  },
];

function Recruitment() {
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <div className="recruitment__container">
        {items.map((item) => (
          <Row className="recruitment__row-item">
            <Col sm={4} md={6} className="recruitment__col-item">
              <h3 className="recruitment__heading">{item.title}</h3>
            </Col>
            <Col sm={20} md={18}>
              <p className="recruitment__text">{item.text}</p>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Recruitment;
