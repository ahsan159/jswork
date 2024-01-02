import React from 'react';
import Card from './Card';
import SData from './Data';
import './App.css';
// import logo from './logo.svg';

let ncards = (val) => {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    ></Card>
  );
};

function App() {
  return (
<>
    <h1 className="heading_style">List of Top5 Netflix Series 2020</h1>
    {/* using simple function   */}
    {/* {SData.map(ncards)} */}
    {/* annonymus fat arrow function */}
    {/* a unique "key" is a must for every child react element */}
    {SData.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        ></Card>
      );
    })}
    {/* <Card
      imgsrc={SData[1].imgsrc}
      title={SData[1].title}
      sname={SData[1].sname}
      link={SData[1].link}
    ></Card>
    <Card
      imgsrc={SData[2].imgsrc}
      title={SData[2].title}
      sname={SData[2].sname}
      link={SData[2].link}
    ></Card>
    <Card
      imgsrc={SData[3].imgsrc}
      title={SData[3].title}
      sname={SData[3].sname}
      link={SData[3].link}
    ></Card>
    <Card
      imgsrc={SData[4].imgsrc}
      title={SData[4].title}
      sname={SData[4].sname}
      link={SData[4].link}
    ></Card> */}
  </>
  );
}

export default App;
