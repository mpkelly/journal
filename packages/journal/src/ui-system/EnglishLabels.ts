import { I18NBundle, pluralize } from "@mpkelly/siam";

export const Labels: I18NBundle = {
  todoItemPlaceholder:
    "Due dates can be set like {36hours} or {2days} (followed by a space)",
  items: (count) => pluralize(count, "item", "items"),
  confirmDelete: "Confirm delete?",
  addNewTags: "Add new tags",
  finished: "I'm done",
  searchResults: (count) => pluralize(count, "result", "results"),
};
