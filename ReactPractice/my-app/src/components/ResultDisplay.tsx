import { resultSelector } from "../Atom/CalcAtom";
import { useRecoilValue } from "recoil";

function ResultDisplay() {
  const result = useRecoilValue(resultSelector);
  return (
    <div>
      <p>총합: {result.sum}</p>
      <p>곱합: {result.multi}</p>
    </div>
  );
}

export default ResultDisplay;
