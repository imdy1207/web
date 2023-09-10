import ContainerB from "./B";
import { useContext } from "react";
import { MyContext } from "../App";

export default function ContainerA() {
  const { state } = useContext(MyContext);

  return (
    <div>
      <div className="container a">
        <div className="title">
          {state.top === "apple" &&
          state.middle === "banana" &&
          state.bottom === "coconut"
            ? "Component A"
            : "Component A - changed"}
        </div>
        <div className="content">
          <ContainerB />
        </div>
      </div>
    </div>
  );
}
