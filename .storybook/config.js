import React from "react";

import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";

import defaultNotes from "./instructions.md";

import { ThemeProvider } from "@material-ui/styles";
import NoSsr from "@material-ui/core/NoSsr";

withOptions({
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: true,
  downPanelInRight: false,
  sortStoriesByKind: true
});

addParameters({ notes: defaultNotes });
addDecorator(withKnobs);

configure(
  [
    require.context("../src", true, /\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.jsx?$/)
  ],
  module
);
