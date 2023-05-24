import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "../src/App.css";
import Card from "./Card";
import { useState } from "react";
import Categories from "./Categories";
import MainCard from "./MainCard";
// console.log(Menu)

const allValues = [
  ...new Set(Menu.map((currElem) => currElem.username)),
  "all",
];
console.log(allValues);

const App = () => {
  const [data, setData] = useState(Menu);
  const [cat, setCat] = useState(allValues);
  console.log(setCat);

  const selectedItem = (currElem) => {
    console.log(currElem);
    if (currElem === "all") {
      setData(Menu);
      return;
    }
    const mains = Menu.filter((pres) => {
      return pres.username === currElem;
    });
    setData(mains);
  };

  return (
    <>
      <MainCard
        Categories={Categories}
        cat={cat}
        data={data}
        Card={Card}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default App;
