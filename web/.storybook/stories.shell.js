import React from "react";
import { storiesOf } from "@storybook/react";
import stories from "../src/stories";

const book = storiesOf("Stories", module);
stories.forEach(s => {
  const chapters = [{ sections: s.section || [{ sectionFn: s.sectionFn }] }];
  book.addWithChapters(s.title, { chapters });
});
