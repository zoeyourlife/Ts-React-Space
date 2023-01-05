import type { AppProps } from "next/app";
import { DatePicker } from "../components/DatePicker";
import "./App.css";

export default function App({ Component, pageProps }: AppProps) {
  return <DatePicker />;
}
