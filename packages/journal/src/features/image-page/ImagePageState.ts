import constate from "constate";
import { useImageState } from "../images/ImageState";

export const [ImagePageStateProvider, useImagePageState] = constate(
  useImageState
);
