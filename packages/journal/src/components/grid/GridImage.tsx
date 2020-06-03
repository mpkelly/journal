import { FC } from "react";
import { styled, FlexProps, getStyles } from "@mpkelly/siam";

export const GridImage: FC<FlexProps> = styled.img<FlexProps>`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  ${getStyles}
`;
