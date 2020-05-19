import { DefaultConstraints } from "@mpkelly/react-editor-kit";

export const WikiEditorConstraints = {
  ...DefaultConstraints,
  //Important: empty nodes array means this node cannot accept other nodes (which would displace it)
  "fixed-title": [],
};
