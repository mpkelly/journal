import { I18NBundle, pluralize } from "@mpkelly/siam";

export const Labels: I18NBundle = {
  hello: "bonjour",
  todoItemPlaceholder:
    "Due dates can be set like {36hours} or {2days} (followed by a space)",
  items: (count) => pluralize(count, "item", "items"),
  confirmDelete: "Confirm delete?",
};
