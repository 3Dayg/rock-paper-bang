import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, { MouseEventHandler } from "react";

type Props = {
  id: string,
  children?: JSX.Element;
  clickHandler: (id: string) => () => void;
}

const Choice : React.FunctionComponent<Props> = ({id, clickHandler, children}): JSX.Element => {
  return <button onClick={clickHandler(id)}>{children}</button>
};

export { Choice };
