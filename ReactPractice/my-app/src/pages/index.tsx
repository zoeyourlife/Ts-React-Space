import Calculate from "../components/Calculate";
import MyComponent from "../components/MyComponent";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <>
      <RecoilRoot>
        <Calculate />
      </RecoilRoot>
    </>
  );
}
