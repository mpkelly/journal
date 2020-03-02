import React, { Fragment } from "react";

export interface ShowProps {
  when: any;
  children: any;
}

export const Show = (props: ShowProps) => {
  const { children, when } = props;
  if (!Boolean(when)) {
    return null;
  }
  return children;
};
