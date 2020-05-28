import React, { ReactNode, FC } from "react";
import { FlexProps, Portal, Column } from "@mpkelly/siam";
import { Overlay } from "./Overlay";
import { stopEvent } from "@mpkelly/react-editor-kit";

export interface DialogProps extends FlexProps {
  children: ReactNode;
  onClickOutside(): void;
}

export const Dialog: FC<DialogProps> = (props: DialogProps) => {
  const { children, gravity, onClickOutside, ...rest } = props;
  return (
    <Portal>
      <Overlay onClick={onClickOutside} gravity={gravity}>
        <Column
          p="lg"
          width={300}
          height={"auto"}
          zIndex={"dialogs"}
          backgroundColor="background-light1"
          borderRadius="md"
          boxShadow="sm"
          onClick={stopEvent}
          onContextMenu={stopEvent}
          {...rest}
        >
          {children}
        </Column>
      </Overlay>
    </Portal>
  );
};

Dialog.defaultProps = {
  gravity: "center",
};
