import React from "react";
import { FlexProps, Select, MenuItemModel, Button } from "@mpkelly/siam";

export interface DropdownProps extends FlexProps {
  value: string;
  items: string[];
  onChange(value: string): void;
}

export const Dropdown = (props: DropdownProps) => {
  const { value, items, onChange, width, ...rest } = props;
  const menuItems: MenuItemModel[] = items.map((item) => ({ text: item }));
  return (
    <Select
      items={menuItems}
      values={[menuItems.find((item) => item.text === value)]}
      styles={{
        "si-menu-items": {
          width,
        },
      }}
      onItemClicked={(item: MenuItemModel) => onChange(item.text as string)}
      {...rest}
    >
      <Button kind="muted" gravity="center-start">
        {value}
      </Button>
    </Select>
  );
};
