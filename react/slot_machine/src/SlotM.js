const SlotM = (props) => {
    let { x, y, z } = props;
    // console.log(`${SData.length} ${r1} ${r2} ${r3}`);
    if (x === y && z === x) {
      return (
        <>
          <div className="singleSlot">
            <h1 className="Jackpot">
              {x} {y} {z}{" "}
            </h1>
            <h1 className="Jackpot">🎁 Jackpot 🎁</h1>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="singleSlot">
            <h1 className="TryAgain">
              {x} {y} {z}{" "}
            </h1>
            <h1 className="TryAgain">💔 better luck next time 💔</h1>
          </div>
        </>
      );
    }
  };
  
  export default SlotM;