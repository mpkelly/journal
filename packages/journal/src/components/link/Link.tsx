import { FC } from "react";
import { Link as RLink } from "react-router-dom";
import { styled, getStyles, FlexProps } from "@mpkelly/siam";

export const Link: FC<FlexProps> = styled(RLink)<FlexProps>`
  text-decoration: none;
  color: unset;
  :first-child {
    text-decoration: none;
  }
  ${getStyles}
`;
