import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
        chunkSizeWarningLimit: 500,
        outDir: 'build',
    },
});
