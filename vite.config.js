import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        include: ["@google/generative-ai"],
    },
});