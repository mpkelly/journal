import { styled, getStyles } from "@mpkelly/siam";

export const TextArea = styled.textarea`
  ${(props) => getStyles(props, "components.input")}
`;
