import { Link as RLink } from "react-router-dom";
import { styled, getStyles } from "@mpkelly/siam";

export const Link = styled(RLink)`
  text-decoration: none;
  color: unset;
  :first-child {
    text-decoration: none;
  }
  ${(props) => getStyles(props)}
`;
