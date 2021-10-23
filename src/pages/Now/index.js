import React, { useEffect } from "react";
import { InfoMaps, Section } from "../../components";
import { online } from "../../data";
const Now = () => {
  useEffect(() => {
    document.title = "Our stores - Crochet Art - For Handmade";
    window.location = <a href="tel:+201019955700">01019955700</a>;  //Link
  }, []);
  return (
    <>
      <InfoMaps />
      {online.map((store, index) => (
        <Section
          subHeader={store.subHeader}
          header={store.header}
          description={store.description}
          linkBtn={store.linkBtn}
          img={store.img}
          key={index}
        />
      ))}
    </>
  );
};

export default Now;
