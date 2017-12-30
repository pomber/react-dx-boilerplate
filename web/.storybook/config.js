import { configure, setAddon } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import chaptersAddon, {
  storyStyles,
  chapterStyles,
  sectionStyles,
  setDefaults
} from "react-storybook-addon-chapters";

storyStyles.header.marginBottom = 0;
storyStyles.title.fontSize = 26;
storyStyles.story.borderBottom = "2px dashed";
chapterStyles.header.marginBottom = 0;
sectionStyles.header.borderTop = "2px dashed";
sectionStyles.header.marginBottom = 0;
sectionStyles.container.marginBottom = 0;
sectionStyles.componentContainer.marginBottom = 15;
sectionStyles.subsection.marginBottom = 0;

setDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false
  }
});

setAddon(chaptersAddon);

setOptions({
  name: "Lita Storybook",
  url: "#",
  goFullScreen: false,
  showStoriesPanel: false,
  // showDownPanel: false,
  showSearchBox: false,
  // downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  sidebarAnimations: false
  // selectedAddonPanel: undefined
});

configure(() => require("./stories.shell.js"), module);
