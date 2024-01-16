import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import questions from "./question";
import Accordion from "./Accordion";

function App() {
  return (
    <>
      <div className="mainBody">
        <h1 className="text-center text-uppercase mt-3 text-success">
          Welcome to bootstrap
        </h1>
        <div className="accordionDiv">
          {questions.map((cEle) => {
            const { id } = cEle;
            return <Accordion key={id} {...cEle}></Accordion>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
