import { Media } from "./MediaDatabase";
import { FlexProps } from "@mpkelly/siam";

export interface MediaItemProps extends FlexProps {
  media: Media;
  onPreviewBackgroundClick(): void;
  showPreview: boolean;
}
