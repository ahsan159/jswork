import React from "react";

const ConvertData = (props) => {
  let colorArray = ["blue", "red", "green", "brown", "black", "grey","yellowgreen","orange","violet","purple","pink","lightgreen","salmon"];
  // let textArray = props.textData.split(" ");
  // {
  //   textArray.map((cItem, index) => {
  //     console.log(`${index}: ${cItem}`);
  //     return <h2 style={{ color: colorArray[index] }}>{cItem}</h2>;
  //   });
  // }
  let textArray = [];
  textArray = props.TextData.split(" ");
  return (
    <>
      {textArray.map((cItem, index) => {
            let colorCode = (index%colorArray.length);
        return (            
          <h2 key={index} style={{ color: colorArray[colorCode] }}>
            {cItem}
          </h2>
        );
      })}
    </>
  );
};

export default ConvertData;
