import React, { useState, useContext } from "react";
import { DispatchContext, IndexState } from "./RootContainer";

const TextContainer: React.FC = () => {
  interface IndexStateFace {
    id: number;
    text: string;
    doUpdate: boolean;
  }

  const [valueText, setValueText] = useState("");
  function textChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueText(e.target.value);
  }
  const state = useContext(IndexState);
  const { dispatch } = useContext(DispatchContext);

  function handleClick() {
    dispatch({
      type: "create",
      id: state.length,
      text: valueText,
      doUpdate: false,
    });
    setValueText("");
  }

  state.forEach((element: IndexStateFace) => {
    if (element.doUpdate) {
      dispatch({
        type: "update",
        id: element.id,
        text: valueText,
        doUpdate: false,
      });
    }
  });

  return (
    <>
      <input type="text" onChange={textChange} value={valueText} />
      <button onClick={handleClick} type="submit">
        +
      </button>
    </>
  );
};

export default TextContainer;
