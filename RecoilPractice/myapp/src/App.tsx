import React from "react";
import { RecoilRoot } from "recoil";
import Calculate from "../../../ReactPractice/my-app/src/components/Calculate";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Calculate />
      </RecoilRoot>
    </div>
  );
}

export default App;
