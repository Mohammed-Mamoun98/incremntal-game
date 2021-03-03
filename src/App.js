import { useEffect } from "react";
import { question } from "../models/Question";
import "./styles.scss";

export default function App() {
  useEffect(() => {
    console.log({ question });
  }, []);

  return (
    <div className="container-fluid p0">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
