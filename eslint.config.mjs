import tseslint from '@electron-toolkit/eslint-config-ts';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import eslintPluginSolid from 'eslint-plugin-solid';

export default tseslint.config(
  { ignores: ['**/node_modules', '**/dist', '**/out'] },
  tseslint.configs.recommended,
  eslintPluginSolid.configs['flat/typescript'],
  skipFormatting,

  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
);
