import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        describe: "writeable",
        expect: "writeable",
        it: "writeable",
        console: "writeable",
        afterEach: "writeable",
        jasmine: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
