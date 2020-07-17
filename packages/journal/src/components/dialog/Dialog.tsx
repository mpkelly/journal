import React, { ReactNode, FC } from "react";
import { FlexProps, Portal, Column, Scope } from "@mpkelly/siam";
import { stopEvent } from "@mpkelly/react-editor-kit";
import { Overlay } from "./Overlay";

export interface DialogProps extends FlexProps {
  children: ReactNode;
  overlayBackground?: string;
  onClickOutside(): void;
}

export const Dialog: FC<DialogProps> = (props: DialogProps) => {
  const {
    overlayBackground,
    children,
    gravity,
    onClickOutside,
    ...rest
  } = props;
  return (
    <Scope value="dark">
      <Portal>
        <Overlay
          backgroundColor={overlayBackground}
          onClick={onClickOutside}
          gravity={gravity}
        >
          <Column
            p="lg"
            width={300}
            height={"auto"}
            zIndex={"dialogs"}
            backgroundColor="background"
            borderRadius="md"
            boxShadow="sm"
            onClick={stopEvent}
            onContextMenu={stopEvent}
            data-test="dialog"
            {...rest}
          >
            {children}
          </Column>
        </Overlay>
      </Portal>
    </Scope>
  );
};

Dialog.defaultProps = {
  gravity: "center",
};
