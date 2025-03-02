import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'FocusMode',
    description: 'FocusMode is a browser extension that helps you to watch youtube in a focus mode',
    version: '1.0.0',
  },
});
