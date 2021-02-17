import React, { useContext } from "react";
import { DispatchContext } from "./RootContainer";

interface Props {
  Id: number;
  Text: string;
}
const DeleteContainer: React.FC<Props> = ({ Id, Text }): JSX.Element => {
  const { dispatch } = useContext(DispatchContext);
  return (
    <>
      <span>
        {Id}
        {Text}
        <button
          type="submit"
          onClick={() => {
            dispatch({
              type: "delete",
              id: Id,
              text: "",
              doUpdate: false,
            });
          }}
        >
          ×
        </button>
      </span>
    </>
  );
};
export default DeleteContainer;
