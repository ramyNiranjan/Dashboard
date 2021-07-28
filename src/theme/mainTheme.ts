import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

export const mainTheme = deepMerge(grommet, {
    global: {
      colors: {
        brand: '#519BD0',
        secondary: '#F5F5F5',
        secondaryText: '858585'
      }
    }
  });