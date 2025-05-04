/** @file Prettier 配置文件 */

/** @type {import('prettier').Config} */
const baseConfig = {
  $schema: 'https://json.schemastore.org/prettierrc',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  endOfLine: 'auto',
};

/** @type {import('prettier').Config} */
const sortImportsConfig = {
  importOrder: [
    '<THIRD_PARTY_MODULES>',

    '^@renderer/components/(.*)$',
    '^@renderer/assets/(.*)$',
    '^@renderer/types/(.*)$',
    '^@renderer/data/(.*)$',
    '^@renderer/(.*)$',

    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

/** @type {import('prettier').Config} */
const tailwindConfig = {
  tailwindFunctions: ['twJoin', 'twMerge'],
};

/** @type {import('prettier').Config['plugins']} */
const plugins = [
  '@trivago/prettier-plugin-sort-imports',
  './node_modules/prettier-plugin-jsdoc/dist/index.js',
  'prettier-plugin-tailwindcss',
];

const config = {
  ...baseConfig,
  ...sortImportsConfig,
  ...tailwindConfig,
  plugins,
};

export default config;
