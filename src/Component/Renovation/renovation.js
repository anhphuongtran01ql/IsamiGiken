import React, { useEffect } from "react";
import ImageCover from "../Header/imageCover";
import renovation_mv from "../../assets/Images/renovation/renovation_mv.jpg";
import "./renovation.css";

const infoHeader = {
  image: renovation_mv,
  title: "Renovation",
  subTitle: "施工事例",
};

function Renovation() {
  useEffect(() => {
    document.title = "施工事例｜功美技建";
  }, []);

  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="renovation">
        <p>現在、施工事例のデータがありません</p>
      </section>
    </>
  );
}

export default Renovation;
