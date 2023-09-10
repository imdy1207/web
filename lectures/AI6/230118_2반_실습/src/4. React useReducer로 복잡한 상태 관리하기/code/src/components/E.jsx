import { useContext } from "react";
import { MyContext } from "../App";

export default function ContainerE() {
  const { state } = useContext(MyContext);

  return (
    <div className="container w">
      <div className="title">Component E</div>
      <div className="content" data-testid="container-e">{state.bottom}</div>
    </div>
  );
}
