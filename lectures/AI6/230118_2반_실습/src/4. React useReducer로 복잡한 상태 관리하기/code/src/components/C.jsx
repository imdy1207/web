import { useContext } from "react";
import { MyContext } from "../App";

export default function ContainerC() {
  const { state } = useContext(MyContext);

  return (
    <div>
      <div className="container w">
        <div className="title">Component C</div>
        <div className="content" data-testid="container-c">{state.top}</div>
      </div>
    </div>
  );
}
