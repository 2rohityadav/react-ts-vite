import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const processEnvValues = {
    'process.env': Object.entries(env).reduce(
      (prev, [key, val]) => ({
        ...prev,
        [key]: val,
      }),
      {},
    ),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
    envFile: '.env.local',
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      host: 'localhost',
    },
  };
});
