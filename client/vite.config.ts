import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Other configuration options...

  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
    },
  },

  // Other configuration optionns...
});