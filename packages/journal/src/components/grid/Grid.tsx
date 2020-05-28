import React from "react";
import { FlexProps, styled, getStyles } from "@mpkelly/siam";

export const Grid = (props: FlexProps) => {
  const { children, ...rest } = props;
  const items = React.Children.toArray(children);

  return (
    <List {...rest}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </List>
  );
};

const List = styled.ul<FlexProps>`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;
  padding: 0;
  li {
    height: 30vh;
    flex-grow: 1;
    padding: 8px;
  }

  li:last-child {
    flex-grow: 0;
  }
  ${getStyles}
`;
