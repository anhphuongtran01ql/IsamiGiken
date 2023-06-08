import { Col, Row } from "antd";
import React from "react";
import ImageCover from "../Header/imageCover";
import info_mv from "../../assets/Images/about/info_mv.jpg";
import "./about.css";

const infoHeader = {
  image: info_mv,
  title: "About",
  subTitle: "会社概要",
};

const items = [
  {
    title: "会社名",
    content: <span>有限会社 功美技建（いさみぎけん)</span>,
  },
  {
    title: "所在地",
    content: (
      <>
        <p style={{ margin: 0 }}>〒560-0014</p>
        <p style={{ margin: 0 }}>大阪府豊中市熊野町４丁目１−１８</p>
      </>
    ),
  },
  {
    title: "営業時間",
    content: <span>09:00 ~ 17:00</span>,
  },
  {
    title: "休日",
    content: <span>第２土曜日、日曜日、祝日</span>,
  },
  {
    title: "電話番号",
    content: <span>06-6844-7078</span>,
  },
  {
    title: "FAX",
    content: <span>06-6844-7088</span>,
  },
  {
    title: "代表者",
    content: <span>西田 功介</span>,
  },
  {
    title: "従業員数",
    content: <span>５名</span>,
  },
  {
    title: "創業",
    content: <span>平成 7年 7月</span>,
  },
  {
    title: "法人設立",
    content: <span>平成 17年 1月</span>,
  },
  {
    title: "資本金",
    content: <span>1000万円</span>,
  },

  {
    title: "事業内容",
    content: (
      <>
        <p style={{margin:0}}>住宅外装工事（新築・リフォーム</p>
        <ol>
          <li>外壁材工事</li>
          <ul>
            <li>
              窯業系サイディング工事：ニチハ、クボタ松下電工外装、旭トステム、他
            </li>
            <li>金属サイディング工事：Kmew、アイジー工業、他</li>
            <li>パワーボード工事：旭化成、クリオン、住友金属鉱山、他</li>
          </ul>
          <li>屋根材工事</li>
          <ul>
            <li>新生瓦工事：Kmew、ニチハ、他</li>
            <li>和洋瓦工事：近畿セラミック、他各種瓦メーカー</li>
          </ul>
          <li>雨樋材工事</li>
          <ul>
            <li>パナソニック、セキスイ、タニタハウジングウェア、他</li>
          </ul>
          <li>塗装工事</li>
          <ul>
            <li>各種塗装工事：SK化研、アイカ工業、菊水化学工業、他</li>
          </ul>
          <li>シーリング工事</li>
          <ul style={{ listStyle: "none" }}>
            <li>シーリング全般工事：オート化学工業、サンライズ、他</li>
          </ul>
        </ol>
      </>
    ),
  },
  {
    title: "取引先",
    content: <span>商社、ハウスメーカー、地場ホームビルダー・工務店</span>,
  },
  {
    title: "工事エリア",
    content: <span>全国対応</span>,
  },
  {
    title: "工事実績",
    content: <span>年間施工棟数 350棟</span>,
  },
  {
    title: "資格",
    content: (
      <>
        <ul>
          <li>日本窯業外装材協会 認定サイディング施工士（登録番号：GGA098）</li>
          <li>ニチハ登録施工店（登録番号：NGKー近畿−259）他</li>
          <li>ルーガ認定施工店</li>
          <li>産業廃棄物収集運搬許可 第02700187661号</li>
          <li>
            建築工事業 屋根工事業
            タイル・レンガ・ブロック工事業許可（般ー3）第140845号
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "理念",
    content: (
      <>
        <p style={{ fontWeight: "bold", margin: 0 }}>
          信用づくり・良いものづくり（お客様満足の高工事品質・・・技術＋コスト
        </p>
        <p style={{ fontWeight: "bold", margin: 0 }}>
          <span style={{ padding: "0 20px 0 0" }}>協力</span>
          <span style={{ padding: "0 20px 0 0" }}>感謝</span>
          <span style={{ padding: "0 20px 0 0" }}>挑戦</span>
        </p>
      </>
    ),
  },
];

function About() {
  return (
    <div>
      <ImageCover infoHeader={infoHeader} />
      <Row className="about__row_container">
        <Col className="about__col_container" span={24}>
          <Row className="about__row_title-top">
            <Col lassName="about__col_title-top" span={24}>
              <h2 className="about__row_title-heading">会社概要</h2>
            </Col>
          </Row>
          {items.map((item, index) => (
            <Row className="about__item_container" key={index}>
              <Col span={24}>
                <Row>
                  <Col xs={3} md={6}>
                    <h3 className="about__item_heading">{item.title}</h3>
                  </Col>
                  <Col className="about__item_content" xs={21} md={18}>
                    {item.content}
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default About;
