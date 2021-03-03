import { useEffect } from "react";
import { firstQuestion, secondQuestion } from "../../data/questions";
import { question } from "../../models/Question";
import "../styles.scss";
import "./app.scss";

export default function App() {
  useEffect(() => {
    // console.log({ firstQuestion, secondQuestion });
  }, []);

  return (
    <div className="container-fluid p-0">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
