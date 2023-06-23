import React from "react";
import ImageCover from "../Header/imageCover";
import recruit_mv from "../../assets/Images/recruit/recruit_mv.jpg";
import { Descriptions } from "antd";
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
    text: ' 9:00〜17:00 <br className="text__mode">※現場の状況によります。',
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
    text: `施工の質にこだわった仕事は終わったあとも気持ちいい!!<br>
    最高級の充実感が得られる職場!!`,
  },
  {
    id: 6,
    title: "給与",
    text: '月給 : 25万円以上 <br className="text__mode">※施工管理の資格がある方は優遇あり',
  },
];

function Recruitment() {
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <section className="container recruitment">
        <Descriptions
          bordered
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
          {items.map((item) => (
            <Descriptions.Item key={item.id} label={item.title}>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </Descriptions.Item>
          ))}
        </Descriptions>
      </section>
    </div>
  );
}

export default Recruitment;
