import React from "react";
import { Text, Icon, FlexProps } from "@mpkelly/siam";
import { ItemData } from "../content/ItemData";
import { Link } from "../routing/Link";

export interface ItemTableRowViewProps extends FlexProps {
  item: ItemData;
  icon: string;
  color: string;
}

export const ItemTableRowView = (props: ItemTableRowViewProps) => {
  const { item, icon, color } = props;
  return (
    <tr className="row" key={item.id}>
      <td className="cell">
        <Icon name={icon} color={color} />
      </td>
      <td className="cell">
        <Link to={`/library/view/${item.id}`}>
          <Text color="accent">{item.name}</Text>
        </Link>
      </td>
      <td className="cell">
        <Text>2 days ago</Text>
      </td>
      <td className="cell">
        <Icon name={"more"} ml="auto" kind="button" />
      </td>
    </tr>
  );
};
