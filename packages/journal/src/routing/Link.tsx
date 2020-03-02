import { Link as RLink } from "react-router-dom";
import { styled } from "udx-react";

export const Link = styled(RLink)`
  text-decoration: none;
  color: unset;
  :first-child {
    text-decoration: none;
    color: ${(props: any) => props.theme.colors.dark};
  }
`;
