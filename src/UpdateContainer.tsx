import React, { useContext } from "react";
import styled from "styled-components";
import { DispatchContext } from "./RootContainer";

interface Props {
  Id: number;
}

const Button = styled.button`
  color: red;
`;

const UpdateContainer: React.FC<Props> = ({ Id }) => {
  const { dispatch } = useContext(DispatchContext);
  return (
    <Button
      type="submit"
      onClick={() => {
        dispatch({
          type: "updateNotice",
          id: Id,
          text: "",
          doUpdate: false,
        });
      }}
    >
      編集
    </Button>
  );
};

export default UpdateContainer;
