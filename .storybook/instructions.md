# Component XYZ

Some example instruction on how to document a component

```jsx
import { ThemeProvider } from "@material-ui/styles";
import NoSsr from "@material-ui/core/NoSsr";

import theme from "../src/themes/default";

addDecorator(storyFn => (
  <NoSsr>
    <ThemeProvider theme={theme}>{storyFn({ theme })}</ThemeProvider>
  </NoSsr>
));
```
