import { ChangeEvent } from "react";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ label, value, onChange }: NumberInputProps) => {
  return (
    <div>
      <label>{label} : </label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default NumberInput;
