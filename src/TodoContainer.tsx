import React, { useContext } from "react";
import DeleteContainer from "./DeleteContainer";
import { IndexState } from "./RootContainer";
import UpdateContainer from "./UpdateContainer";

const TodoContainer: React.FC = (): JSX.Element => {
  const state = useContext(IndexState);

  const HtmlIndex = state
    .filter((todo) => todo.id > 0)
    .map((todo) => (
      <div key={todo.id}>
        <DeleteContainer Id={todo.id} Text={todo.text} />
        <span> </span>
        <UpdateContainer Id={todo.id} />
      </div>
    ));
  return <>{HtmlIndex}</>;
};

export default TodoContainer;
