import { Descriptions } from "antd";
import React, { useEffect } from "react";
import ImageCover from "../Header/imageCover";
import info_mv from "../../assets/Images/about/info_mv.jpg";

import "./about.css";
import Map from "./map";

const infoHeader = {
  image: info_mv,
  title: "About",
  subTitle: "会社概要",
};

const items = [
  {
    title: "会社名",
    content: "有限会社 功美技建（いさみぎけん)",
  },
  {
    title: "所在地",
    content: (
      <>
        <p>〒560-0014</p>
        <p>大阪府豊中市熊野町４丁目１−１８</p>
      </>
    ),
  },
  {
    title: "営業時間",
    content: "09:00 ~ 17:00",
  },
  {
    title: "休日",
    content: "第２土曜日、日曜日、祝日",
  },
  {
    title: "電話番号",
    content: <a href="tel:0668447078">06-6844-7078</a>,
  },
  {
    title: "FAX",
    content: <a href="tel:0668447078">06-6844-7078</a>,
  },
  {
    title: "代表者",
    content: "西田功介",
  },
  {
    title: "従業員数",
    content: "５名",
  },
  {
    title: "創業",
    content: "平成 7年 7月",
  },
  {
    title: "法人設立",
    content: "平成 17年 1月",
  },
  {
    title: "資本金",
    content: "1000万円",
  },

  {
    title: "事業内容",
    content: (
      <>
        住宅外装工事（新築・リフォーム
        <ol className="order__list">
          <li>
            外壁材工事
            <ul className="un-order__list">
              <li>
                窯業系サイディング工事：ニチハ、クボタ松下電工外装、旭トステム、他
              </li>
              <li>金属サイディング工事：Kmew、アイジー工業、他</li>
              <li>パワーボード工事：旭化成、クリオン、住友金属鉱山、他</li>
            </ul>
          </li>
          <li>
            屋根材工事
            <ul className="un-order__list">
              <li>新生瓦工事：Kmew、ニチハ、他</li>
              <li>和洋瓦工事：近畿セラミック、他各種瓦メーカー</li>
            </ul>
          </li>
          <li>
            雨樋材工事
            <ul className="un-order__list">
              <li>パナソニック、セキスイ、タニタハウジングウェア、他</li>
            </ul>
          </li>
          <li>
            塗装工事
            <ul className="un-order__list">
              <li>各種塗装工事：SK化研、アイカ工業、菊水化学工業、他</li>
            </ul>
          </li>
          <li>
            シーリング工事
            <ul className="un-order__list">
              シーリング全般工事：オート化学工業、サンライズ、他
            </ul>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "取引先",
    content: "商社、ハウスメーカー、地場ホームビルダー・工務店",
  },
  {
    title: "工事エリア",
    content: "全国対応",
  },
  {
    title: "工事実績",
    content: "年間施工棟数 350棟",
  },
  {
    title: "資格",
    content: (
      <>
        <ul className="un-order__list">
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
        <p className="text">
          信用づくり・良いものづくり
          <br />
          （お客様満足の高工事品質・・・技術＋コスト
        </p>
        <p className="text">協力 感謝 挑戦</p>
      </>
    ),
  },
];

function About() {
  useEffect(() => {
    document.title = "会社概要｜功美技建";
  }, []);

  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="container about-us">
        <div className="content">
          <h2>会社概要</h2>
          <Descriptions
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            {items.map((item) => (
              <Descriptions.Item key={item.id} label={item.title}>
                {item.content}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>

        <div className="content">
          <h2>アクセスマップ</h2>
          <Map />
        </div>

        <div className="content" id="staff">
          <h2>スタッフ紹介</h2>
          <p className="about__item_more">準備中</p>
        </div>
      </section>
    </>
  );
}

export default About;
