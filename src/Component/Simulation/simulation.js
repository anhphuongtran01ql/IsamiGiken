import React from "react";
import ImageCover from "../Header/imageCover";
import simulation_top_mv from "../../assets/Images/simulation/simulation_top_mv.jpg";
import "./simulation.css";
import SimulationList from "./simulationList";

const infoHeader = {
  image: simulation_top_mv,
  title: "Simulation",
  subTitle: "料金シミュレーション",
};

const items = {
  title: "修正箇所はどこですか？",
  options: [
    {
      value: "屋根",
      id: 1,
      title: "何階建てですか？",
      question: 1,
      options: [
        {
          value: "平屋",
          id: 1,
          title: "希望するリフォーム方法はどれですか？",
          question: 2,
          options: [
            {
              value: "2面以下",
              id: 1,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "3面以上",
              id: 2,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
        {
          value: "2階建て",
          id: 2,
          title: "屋根面はいくつありますか？",
          question: 2,
          options: [
            {
              value: "2面以下",
              id: 1,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "3～5面",
              id: 2,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "6面以上",
              id: 3,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
        {
          value: "3階建て",
          id: 3,
          title: "屋根面はいくつありますか？",
          question: 2,
          options: [
            {
              value: "3面以下",
              id: 1,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "4～7面",
              id: 2,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "8面以上",
              id: 3,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "外壁",
      id: 2,
      title: "何階建てですか？",
      options: [
        {
          value: "平屋",
          id: 1,
          title: "壁面はいくつありますか？",
          question: 2,
          options: [
            {
              value: "4面以下",
              id: 1,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "5面以上",
              id: 2,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
        {
          value: "2階建て",
          id: 2,
          title: "壁面はいくつありますか？",
          question: 2,
          options: [
            {
              value: "4面以下",
              id: 1,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "5面以上",
              id: 2,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
        {
          value: "3階建て",
          id: 3,
          title: "壁面はいくつありますか？",
          question: 2,
          options: [
            {
              value: "4面以下",
              id: 1,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "5面以上",
              id: 2,
              title: "現在使われている壁材はどれですか？",
              question: 3,
              options: [
                {
                  value: "窯業系",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属系",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "木材系",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
      ],
      question: 1,
    },
    {
      value: "バルコニー",
      id: 3,
      title: "バルコニーの数はいくつありますか？",
      options: [
        {
          value: "1個",
          id: 1,
          title: "希望するリフォーム方法はどれですか？",
          question: 2,
          options: [
            {
              value: "サビ止め塗装",
              id: 1,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "ベランダの防水",
              id: 2,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
        {
          value: "2個以上",
          id: 1,
          title: "希望するリフォーム方法はどれですか？",
          question: 2,
          options: [
            {
              value: "サビ止め塗装",
              id: 1,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
            {
              value: "ベランダの防水",
              id: 2,
              title: "現在使われている屋根材はどれですか？",
              question: 3,
              options: [
                {
                  value: "瓦屋根",
                  id: 1,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "金属屋根",
                  id: 2,
                  title: "",
                  question: 4,
                  options: [],
                },
                {
                  value: "わからない",
                  id: 3,
                  title: "",
                  question: 4,
                  options: [],
                },
              ],
            },
          ],
        },
      ],
      question: 1,
    },
  ],
};

function Simulation() {
  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="container simulation">
        <SimulationList item={items} />
      </section>
    </>
  );
}

export default Simulation;
