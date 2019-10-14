import React from "react";

import { configure, addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";

import defaultNotes from "./instructions.md";

import { ThemeProvider } from "@material-ui/styles";
import NoSsr from "@material-ui/core/NoSsr";

const theme = {};

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

addDecorator(storyFn => (
  <NoSsr>
    <ThemeProvider theme={theme}>{storyFn({ theme })}</ThemeProvider>
  </NoSsr>
));

configure(
  [
    require.context("../src", true, /\.stories\.mdx$/),
    require.context("../src", true, /\.stories\.jsx?$/)
  ],
  module
);
