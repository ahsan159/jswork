import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import counter from "./redux/counter";
import { increment,decrement,selectCount } from "./redux/counter";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const currentCount = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <>
      <div className="vw-100 vh-100 bg-warning d-flex flex-column justify-content-center align-items-center">
        <h1>Welcome to react REdux</h1>
        <div
          className="bg-success align-items-center justify-content-center d-flex
        flex-column w-100"
        >
          <h1>Increment/Decrement Counter</h1>
          <h3>using react and redux</h3>
        </div>
        <div className="align-items-center justify-content-center d-flex flex-row">
          <button type="button" className="btn btn-primary" onClick={()=>dispatch(decrement())}>
            -
          </button>
          <input type="text" className="form-control text-center" value={currentCount}/>

          <button type="button" className="btn btn-primary" onClick={()=>dispatch(increment(15))}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
