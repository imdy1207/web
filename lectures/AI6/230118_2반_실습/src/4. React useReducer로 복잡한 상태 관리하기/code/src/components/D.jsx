import { useContext } from "react";
import { MyContext } from "../App";

export default function ContainerD() {
  const { state } = useContext(MyContext);

  return (
    <div className="container w">
      <div className="title">Component D</div>
      <div className="content" data-testid="container-d">{state.middle}</div>
    </div>
  );
}
