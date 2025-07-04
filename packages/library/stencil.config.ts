import { Config } from '@stencil/core';
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'library',
  globalScript: 'src/global.ts',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      dir: 'components'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      outDir: '../library-react/src'
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
};
