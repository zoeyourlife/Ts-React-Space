import Link from "next/link";
import { useRecoilState } from "recoil";
import NumberInput from "./NumberInput";
import ResultDisplay from "./ResultDisplay";
import { ChangeEvent } from "react";
import { firstNumState, secondNumState } from "../Atom/CalcAtom";

const Calculate = () => {
  const [num1, setNum1] = useRecoilState(firstNumState);
  const [num2, setNum2] = useRecoilState(secondNumState);

  const onChagngeNum1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(e.target.value));
  };

  const onChangeNum2 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(e.target.value));
  };

  const handleCalculate = () => {
    const sum = num1 + num2;
    const multi = num1 * num2;
    console.log("Sum:", sum);
    console.log("Multi", multi);
  };
  return (
    <div>
      <NumberInput label="firstNum" value={num1} onChange={onChagngeNum1} />
      <NumberInput label="secondNum" value={num2} onChange={onChangeNum2} />
      <Link href="/ResultDisplay">
        <button onClick={handleCalculate}>계산하기1</button>
      </Link>
      {/* <ResultDisplay /> */}
    </div>
  );
};

export default Calculate;
